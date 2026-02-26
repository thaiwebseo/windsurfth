# Images Directory Structure

## 📁 Folder Organization

### `/hero/`
- Hero section background images
- Hero section decorative elements
- Hero section product screenshots

### `/features/`
- Feature card images
- Feature illustrations
- Workflow diagrams

### `/pricing/`
- Pricing section images
- Plan comparison visuals
- Payment method icons

### `/icons/`
- Custom icons
- Brand assets
- Social media icons

## 📝 Image Guidelines

### File Naming
- Use kebab-case: `hero-background.jpg`
- Include dimensions: `hero-bg-1920x1080.jpg`
- Use descriptive names: `ai-coding-assistant.png`

### Image Formats
- **JPEG**: Photographs and complex images
- **PNG**: Icons and images with transparency
- **SVG**: Vector graphics and icons
- **WebP**: Modern browsers (fallback to JPEG/PNG)

### Image Sizes
- **Hero**: 1920x1080 (desktop), 750x1334 (mobile)
- **Features**: 400x300 (cards), 800x600 (detailed)
- **Icons**: 64x64, 128x128, 256x256
- **Thumbnails**: 300x300

### Optimization
- Compress images before adding
- Use appropriate quality settings
- Include alt text for accessibility
- Use Next.js Image component for optimization

## 🚀 Usage Examples

```jsx
import Image from 'next/image'

// Hero background
<Image
  src="/images/hero/hero-background.jpg"
  alt="Windsurf AI IDE - เครื่องมือเขียนโค้ดอัจฉริยะ"
  fill
  priority
  className="object-cover"
/>

// Feature card image
<Image
  src="/images/features/ai-assistant.png"
  alt="AI Assistant สำหรับการเขียนโค้ด"
  width={400}
  height={300}
  className="rounded-lg"
/>
```
