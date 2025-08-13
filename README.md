# Hedine Jewelry Website

A beautiful, responsive jewelry e-commerce website built with Next.js, TypeScript, and Tailwind CSS. This project was created based on a Figma design and features a modern, elegant interface showcasing exquisite jewelry collections.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, elegant design with smooth animations
- **Product Showcase**: Beautiful product cards with ratings and pricing
- **Interactive Elements**: Hover effects, smooth transitions, and animations
- **Jewelry-Focused**: Specialized design for jewelry e-commerce
- **Performance Optimized**: Built with Next.js for optimal performance

## 🚀 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **ESLint** - Code linting

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hedine-site
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Features

### Components

- **Header**: Navigation with mobile-responsive menu
- **Hero**: Eye-catching hero section with jewelry showcase
- **Features**: Why choose Hedine section with key benefits
- **ProductGrid**: Responsive grid of jewelry products
- **ProductCard**: Individual product cards with ratings and pricing
- **Footer**: Comprehensive footer with links and newsletter signup

### Styling

- **Custom CSS**: Jewelry-specific animations and effects
- **Gradient Backgrounds**: Beautiful gradients for product showcases
- **Hover Effects**: Smooth transitions and hover states
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 🛍️ Product Features

- Star ratings (1-5 stars with half-star support)
- Sale badges and discount percentages
- Original and sale pricing
- Responsive product grid (1-4 columns based on screen size)
- Hover animations and effects

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2-3 columns)
- **Desktop**: > 1024px (3-4 columns)

## 🎯 Key Sections

1. **Navigation**: Clean header with logo and menu
2. **Hero**: Compelling hero section with call-to-action
3. **Features**: Trust-building elements (warranty, shipping, etc.)
4. **Products**: Featured jewelry collection
5. **Footer**: Contact info, links, and newsletter

## 🔧 Customization

### Adding New Products

Edit the `products` array in `src/components/ProductGrid.tsx`:

```typescript
const products = [
  {
    id: 1,
    name: "PRODUCT NAME",
    price: 299,
    originalPrice: 399, // Optional
    discount: 25, // Optional
    rating: 4.5,
    image: "/product-image.jpg",
    isOnSale: true, // Optional
  },
  // ... more products
];
```

### Styling Customization

- Global styles: `src/app/globals.css`
- Component styles: Tailwind classes in component files
- Custom animations: Defined in globals.css

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please reach out through the contact form on the website.

---

**Built with ❤️ for Hedine Jewelry**