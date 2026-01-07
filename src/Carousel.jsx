import React from 'react';
import { Carousel as BootstrapCarousel, Container } from 'react-bootstrap';
// New package button
import { Button } from '@veeyaainnovatives/button';

/**
 * Hero Carousel Component
 * 
 * A reusable hero carousel/slider component with background images and customizable content.
 * 
 * @param {Array} slides - Array of slide objects
 * @param {string} slides[].image - Background image URL or path
 * @param {string} slides[].title - Slide title (supports HTML/JSX)
 * @param {string} slides[].description - Slide description text
 * @param {string} slides[].buttonText - Button text
 * @param {Function} slides[].buttonOnClick - Button click handler
 * @param {number} slides[].interval - Auto-play interval in milliseconds (optional)
 * @param {string} className - Additional CSS classes for the carousel container
 * @param {string} overlayClassName - CSS classes for the overlay div
 * @param {string} contentClassName - CSS classes for the content section
 * @param {string} titleClassName - CSS classes for the title
 * @param {string} descriptionClassName - CSS classes for the description
 * @param {Function} renderCustomContent - Custom content render function (optional)
 * 
 * @example
 * ```jsx
 * <HeroCarousel 
 *   slides={[
 *     {
 *       image: "/path/to/image.jpg",
 *       title: "Welcome to Our Site",
 *       description: "This is a description",
 *       buttonText: "Get Started",
 *       buttonOnClick: () => console.log('clicked')
 *     }
 *   ]}
 * />
 * ```
 */
const HeroCarousel = ({
  slides = [],
  className = '',
  overlayClassName = 'overlay',
  contentClassName = 'carousel-content',
  titleClassName = 'home-title',
  descriptionClassName = 'home-desc',
  renderCustomContent
}) => {
  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <BootstrapCarousel className={className}>
      {slides.map((slide, index) => (
        <BootstrapCarousel.Item 
          key={slide.id || index} 
          interval={slide.interval !== undefined ? slide.interval : null}
        >
          <div 
            className="carousel-bg-img" 
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={overlayClassName}></div>
            <div className={contentClassName}>
              <Container className="position-relative">
                <div className="clearfix pt-md-5 mt-md-5 d-md-block d-lg-none d-none"></div>
                <div className="home-content-section">
                  {renderCustomContent ? (
                    renderCustomContent(slide, index)
                  ) : (
                    <div>
                      {slide.title && (
                        <h1 className={`${titleClassName} mb-4`}>
                          {React.isValidElement(slide.title) ? (
                            slide.title
                          ) : typeof slide.title === 'string' && slide.title.includes('<strong') ? (
                            slide.title.split(/(<strong[^>]*>.*?<\/strong>)/g).map((part, i) => {
                              if (part.match(/<strong[^>]*>.*?<\/strong>/)) {
                                const classMatch = part.match(/class="([^"]*)"/);
                                const textMatch = part.match(/>([^<]+)</);
                                if (classMatch && textMatch) {
                                  return <strong key={i} className={classMatch[1]}>{textMatch[1]}</strong>;
                                }
                                const textOnly = part.replace(/<\/?strong[^>]*>/g, '');
                                return <strong key={i}>{textOnly}</strong>;
                              }
                              return <React.Fragment key={i}>{part}</React.Fragment>;
                            })
                          ) : (
                            slide.title
                          )}
                        </h1>
                      )}
                      {slide.description && (
                        <p className={`${descriptionClassName} mb-4`}>
                          {slide.description}
                        </p>
                      )}
                      {slide.buttonText && (
                        <Button 
                          className="home-button mt-4"
                          backgroundColor="#677a58"
                          color="#ffffff"
                          hoverBackgroundColor="#5a6a4a"
                          padding="13px 40px"
                          fontSize="16px"
                          fontWeight="500"
                          borderRadius="100px"
                          onClick={slide.buttonOnClick}
                        >
                          {slide.buttonText}
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </Container>
            </div>
          </div>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

export default HeroCarousel;

