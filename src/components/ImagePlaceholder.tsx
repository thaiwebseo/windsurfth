import Image from 'next/image'

interface ImagePlaceholderProps {
  src?: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function ImagePlaceholder({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false 
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
    )
  }

  // Placeholder when no image is provided
  return (
    <div 
      className={`bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <div className="text-center p-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-xs text-gray-600 font-medium">Image Placeholder</p>
        <p className="text-xs text-gray-500 mt-1">{width}x{height}</p>
      </div>
    </div>
  )
}
