# @veeyaainnovatives/carousel

A reusable Hero Carousel component with background images and customizable content for React applications.

## Features

- 🎠 Hero carousel/slider with background images
- 🎨 Customizable content (title, description, buttons)
- 📱 Fully responsive design
- 🔧 Flexible slide configuration
- 💅 Customizable styling via CSS classes
- 🎯 Support for HTML/JSX in titles

## Installation

```bash
npm install @veeyaainnovatives/carousel
```

## Peer Dependencies

This package requires the following peer dependencies:

- `react` (^16.8.0 || ^17.0.0 || ^18.0.0)
- `react-dom` (^16.8.0 || ^17.0.0 || ^18.0.0)
- `react-bootstrap` (^2.0.0)

## Usage

### Basic Example

```jsx
import { HeroCarousel } from '@veeyaainnovatives/carousel';

function App() {
  const slides = [
    {
      id: 1,
      image: "/path/to/image1.jpg",
      title: "Welcome to Our Site",
      description: "This is a description of the first slide.",
      buttonText: "Get Started",
      buttonOnClick: () => console.log('Get Started clicked'),
      interval: 3000
    },
    {
      id: 2,
      image: "/path/to/image2.jpg",
      title: "Second Slide",
      description: "This is a description of the second slide.",
      buttonText: "Learn More",
      buttonOnClick: () => console.log('Learn More clicked'),
      interval: 3000
    }
  ];

  return (
    <HeroCarousel slides={slides} />
  );
}
```

### Advanced Example with HTML in Title

```jsx
import { HeroCarousel } from '@veeyaainnovatives/carousel';

function App() {
  const slides = [
    {
      id: 1,
      image: "/path/to/image1.jpg",
      title: 'Welcome to Our <strong class="theme-color-tan">Amazing</strong> Site',
      description: "This is a description with highlighted text.",
      buttonText: "Get Started",
      buttonOnClick: () => handleClick(),
      interval: 5000
    }
  ];

  return (
    <HeroCarousel 
      slides={slides}
      className="custom-carousel"
      titleClassName="custom-title"
      descriptionClassName="custom-description"
    />
  );
}
```

### Custom Content Rendering

```jsx
import { HeroCarousel } from '@veeyaainnovatives/carousel';

function App() {
  const slides = [/* ... */];

  const renderCustomContent = (slide, index) => {
    return (
      <div>
        <h1 className="custom-title">{slide.title}</h1>
        <p className="custom-description">{slide.description}</p>
        <button onClick={slide.buttonOnClick}>
          {slide.buttonText}
        </button>
      </div>
    );
  };

  return (
    <HeroCarousel 
      slides={slides}
      renderCustomContent={renderCustomContent}
    />
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `slides` | `array` | Yes | `[]` | Array of slide objects |
| `slides[].id` | `string\|number` | No | `index` | Unique identifier for slide |
| `slides[].image` | `string` | Yes | - | Background image URL or path |
| `slides[].title` | `string\|JSX` | No | - | Slide title (supports HTML with `<strong>` tags) |
| `slides[].description` | `string` | No | - | Slide description text |
| `slides[].buttonText` | `string` | No | - | Button text |
| `slides[].buttonOnClick` | `function` | No | - | Button click handler |
| `slides[].interval` | `number` | No | `null` | Auto-play interval in milliseconds (null = no auto-play) |
| `className` | `string` | No | `''` | Additional CSS classes for carousel container |
| `overlayClassName` | `string` | No | `'overlay'` | CSS classes for overlay div |
| `contentClassName` | `string` | No | `'carousel-content'` | CSS classes for content section |
| `titleClassName` | `string` | No | `'home-title'` | CSS classes for title |
| `descriptionClassName` | `string` | No | `'home-desc'` | CSS classes for description |
| `renderCustomContent` | `function` | No | - | Custom content render function `(slide, index) => JSX` |

## Slide Data Structure

```js
{
  id: 1,                    // Optional: unique identifier
  image: "/path/to/image.jpg", // Required: background image
  title: "Slide Title",     // Optional: title text or HTML
  description: "Description text", // Optional: description
  buttonText: "Click Me",   // Optional: button text
  buttonOnClick: () => {},  // Optional: button click handler
  interval: 3000            // Optional: auto-play interval (ms)
}
```

## Styling

The component uses the following default CSS classes:

- `.carousel-bg-img` - Background image container
- `.overlay` - Overlay div (customizable via `overlayClassName`)
- `.carousel-content` - Content wrapper (customizable via `contentClassName`)
- `.home-content-section` - Content section
- `.home-title` - Title heading (customizable via `titleClassName`)
- `.home-desc` - Description text (customizable via `descriptionClassName`)

You can override these styles or add custom classes using the className props. Make sure to include your CSS styles in your application.

## Title with Highlighted Text

You can use HTML in the title to highlight specific words:

```jsx
title: 'Welcome to Our <strong class="theme-color-tan">Amazing</strong> Site'
```

The component will parse the HTML and render `<strong>` tags with their classes correctly.

## License

MIT

## Author

[Veeyaa Innovatives](https://www.veeyaainnovatives.com)

