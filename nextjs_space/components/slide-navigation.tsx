'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SlideNavigation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const total = searchParams?.get('total') || '10';
    
    if (pathname?.startsWith('/pages/')) {
      const page = parseInt(pathname?.split('/')[2] || '1');
      setCurrentPage(page);
    }
    setTotalPages(parseInt(total));
  }, [pathname, searchParams]);

  const goToNextSlide = () => {
    if (currentPage < totalPages) {
      router.push(`/pages/${currentPage + 1}?total=${totalPages}`);
    }
  };

  const goToPreviousSlide = () => {
    if (currentPage > 1) {
      router.push(`/pages/${currentPage - 1}?total=${totalPages}`);
    }
  };

  // Don't render on the main page or during SSR
  if (!isClient || !pathname?.startsWith('/pages/')) {
    return null;
  }

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 shadow-2xl">
      {/* Previous Button */}
      <Button
        onClick={goToPreviousSlide}
        disabled={currentPage <= 1}
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-full hover:bg-blue-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-blue-400" />
      </Button>

      {/* Slide Counter */}
      <div className="flex items-center gap-2 px-4">
        <span className="text-2xl font-bold text-blue-400">{currentPage}</span>
        <span className="text-xl text-gray-400">/</span>
        <span className="text-xl text-gray-300">{totalPages}</span>
      </div>

      {/* Next Button */}
      <Button
        onClick={goToNextSlide}
        disabled={currentPage >= totalPages}
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-full hover:bg-blue-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-blue-400" />
      </Button>
    </div>
  );
}
