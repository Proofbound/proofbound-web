# Proofbound Website

A Quarto-based landing page for Proofbound, an AI-powered book writing service with Stripe payment integration and serverless backend functions.

## Features

- **Dual Pricing Options**: Fully automated AI book generation ($49.95) and Elite human-crafted service
- **Stripe Integration**: Secure payment processing with session verification
- **HAL9 AI Integration**: Book generation API for automated service
- **Animated Landing Page**: Custom CSS animations and interactive elements
- **Serverless Backend**: Netlify Functions for payment verification and API integration

## Architecture

- **Frontend**: Quarto static site generator with custom CSS
- **Backend**: Netlify Functions (Node.js serverless)
- **Payment**: Stripe Checkout with live keys
- **AI Service**: HAL9 book generation API
- **Hosting**: Netlify with custom domain `proofbound.com`

## Development

### Prerequisites
- Quarto CLI installed
- Node.js for serverless functions

### Local Development
```bash
quarto preview          # Start dev server on port 4710
```

### Build
```bash
quarto render          # Generate static site to docs/ directory
```

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd proofbound-web
   ```

2. **Configure Environment Variables**
   ```bash
   cp env.example .env
   # Edit .env and add your actual API keys
   ```

3. **Configure Stripe Keys**
   ```bash
   cp _resources/js/config.js.example _resources/js/config.js
   # Edit config.js and add your actual Stripe keys
   ```

### Environment Variables
Required for serverless functions:
- `STRIPE_SECRET_KEY` - Stripe API secret key
- `HAL9_API_KEY` - HAL9 service API key

Required for frontend (in config.js):
- Stripe publishable key
- Stripe price ID

## Project Structure

- `index.qmd` - Landing page with pricing options
- `success.qmd` - Post-payment success page
- `netlify/functions/` - Serverless functions for payment and API integration
- `_resources/` - Static assets, CSS, and JavaScript
- `docs/` - Generated static site output

## Deployment

Hosted on Netlify with:
- Custom domain configuration
- Serverless function deployment
- Redirect rules for payment verification
- Environment variable management
