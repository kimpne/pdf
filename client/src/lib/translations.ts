/**
 * Translation system for multi-language support
 * 
 * Best practices:
 * - Structured translation keys for maintainability
 * - SEO-optimized titles and descriptions per language
 * - Consistent naming conventions
 * - Pluralization support where needed
 */

export interface Translation {
  // SEO Meta Tags
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  
  // Navigation
  nav: {
    home: string;
    tools: string;
    about: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    features: {
      secure: string;
      fast: string;
      free: string;
    };
  };
  
  // Tools
  tools: {
    merge: {
      name: string;
      description: string;
    };
    split: {
      name: string;
      description: string;
    };
    compress: {
      name: string;
      description: string;
    };
    pdfToWord: {
      name: string;
      description: string;
    };
    wordToPdf: {
      name: string;
      description: string;
    };
    pdfToJpg: {
      name: string;
      description: string;
    };
  };
  
  // Common UI
  ui: {
    upload: string;
    download: string;
    process: string;
    loading: string;
    error: string;
    success: string;
    tryAgain: string;
    chooseFiles: string;
    dropFiles: string;
  };
  
  // Footer
  footer: {
    about: string;
    privacy: string;
    terms: string;
    contact: string;
    copyright: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    seo: {
      title: "Free PDF Tools - Merge, Split, Compress & Convert Online | PDF Tools",
      description: "Professional PDF tools online for free. Merge PDFs, split documents, compress files, convert PDF to Word & more. No registration needed. 100% secure & fast processing.",
      keywords: "free PDF tools, merge PDF online, split PDF, compress PDF, PDF to Word converter, Word to PDF, PDF to JPG, online PDF editor, free PDF merger, PDF splitter"
    },
    nav: {
      home: "Home",
      tools: "Tools",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Every tool you need to work with PDFs in one place",
      subtitle: "Merge, split, compress, and convert PDF files for free. Fast, secure, and easy to use - no registration required.",
      cta: "Get Started Now",
      features: {
        secure: "100% Secure",
        fast: "Lightning Fast",
        free: "Free Forever"
      }
    },
    tools: {
      merge: {
        name: "Merge PDF",
        description: "Combine multiple PDF files into one document"
      },
      split: {
        name: "Split PDF",
        description: "Split a PDF into multiple files or extract pages"
      },
      compress: {
        name: "Compress PDF",
        description: "Reduce PDF file size without losing quality"
      },
      pdfToWord: {
        name: "PDF to Word",
        description: "Convert PDF documents to editable Word files"
      },
      wordToPdf: {
        name: "Word to PDF",
        description: "Convert Word documents to PDF format"
      },
      pdfToJpg: {
        name: "PDF to JPG",
        description: "Convert PDF pages to high-quality images"
      }
    },
    ui: {
      upload: "Upload Files",
      download: "Download",
      process: "Process",
      loading: "Processing...",
      error: "An error occurred",
      success: "Success!",
      tryAgain: "Try Again",
      chooseFiles: "Choose Files",
      dropFiles: "Drop files here or click to browse"
    },
    footer: {
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      copyright: "© 2024 PDF Tools. All rights reserved."
    }
  },
  
  es: {
    seo: {
      title: "Herramientas PDF Gratis - Unir, Dividir, Comprimir y Convertir Online | PDF Tools",
      description: "Herramientas PDF profesionales gratis online. Une PDFs, divide documentos, comprime archivos, convierte PDF a Word y más. Sin registro. 100% seguro y rápido.",
      keywords: "herramientas PDF gratis, unir PDF online, dividir PDF, comprimir PDF, convertir PDF a Word, Word a PDF, PDF a JPG, editor PDF online, unir PDF gratis"
    },
    nav: {
      home: "Inicio",
      tools: "Herramientas",
      about: "Acerca de",
      contact: "Contacto"
    },
    hero: {
      title: "Todas las herramientas que necesitas para trabajar con PDFs en un solo lugar",
      subtitle: "Une, divide, comprime y convierte archivos PDF gratis. Rápido, seguro y fácil de usar - sin registro requerido.",
      cta: "Empezar Ahora",
      features: {
        secure: "100% Seguro",
        fast: "Súper Rápido",
        free: "Gratis Para Siempre"
      }
    },
    tools: {
      merge: {
        name: "Unir PDF",
        description: "Combina múltiples archivos PDF en un documento"
      },
      split: {
        name: "Dividir PDF",
        description: "Divide un PDF en múltiples archivos o extrae páginas"
      },
      compress: {
        name: "Comprimir PDF",
        description: "Reduce el tamaño del archivo PDF sin perder calidad"
      },
      pdfToWord: {
        name: "PDF a Word",
        description: "Convierte documentos PDF a archivos Word editables"
      },
      wordToPdf: {
        name: "Word a PDF",
        description: "Convierte documentos Word a formato PDF"
      },
      pdfToJpg: {
        name: "PDF a JPG",
        description: "Convierte páginas PDF a imágenes de alta calidad"
      }
    },
    ui: {
      upload: "Subir Archivos",
      download: "Descargar",
      process: "Procesar",
      loading: "Procesando...",
      error: "Ocurrió un error",
      success: "¡Éxito!",
      tryAgain: "Intentar de Nuevo",
      chooseFiles: "Elegir Archivos",
      dropFiles: "Arrastra archivos aquí o haz clic para explorar"
    },
    footer: {
      about: "Acerca de Nosotros",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      contact: "Contacto",
      copyright: "© 2024 PDF Tools. Todos los derechos reservados."
    }
  },
  
  ko: {
    seo: {
      title: "무료 PDF 도구 - 병합, 분할, 압축 및 변환 온라인 | PDF 도구",
      description: "무료 전문 PDF 도구 온라인. PDF 병합, 문서 분할, 파일 압축, PDF Word 변환 등. 가입 불필요. 100% 안전하고 빠른 처리.",
      keywords: "무료 PDF 도구, PDF 병합 온라인, PDF 분할, PDF 압축, PDF Word 변환, Word PDF 변환, PDF JPG 변환, 온라인 PDF 편집기, 무료 PDF 병합"
    },
    nav: {
      home: "홈",
      tools: "도구",
      about: "소개",
      contact: "연락처"
    },
    hero: {
      title: "PDF 작업에 필요한 모든 도구를 한 곳에서",
      subtitle: "PDF 파일을 무료로 병합, 분할, 압축 및 변환하세요. 빠르고 안전하며 사용하기 쉬움 - 가입 불필요.",
      cta: "지금 시작하기",
      features: {
        secure: "100% 안전",
        fast: "초고속",
        free: "영원히 무료"
      }
    },
    tools: {
      merge: {
        name: "PDF 병합",
        description: "여러 PDF 파일을 하나의 문서로 결합"
      },
      split: {
        name: "PDF 분할",
        description: "PDF를 여러 파일로 분할하거나 페이지 추출"
      },
      compress: {
        name: "PDF 압축",
        description: "품질 손실 없이 PDF 파일 크기 줄이기"
      },
      pdfToWord: {
        name: "PDF to Word",
        description: "PDF 문서를 편집 가능한 Word 파일로 변환"
      },
      wordToPdf: {
        name: "Word to PDF",
        description: "Word 문서를 PDF 형식으로 변환"
      },
      pdfToJpg: {
        name: "PDF to JPG",
        description: "PDF 페이지를 고품질 이미지로 변환"
      }
    },
    ui: {
      upload: "파일 업로드",
      download: "다운로드",
      process: "처리",
      loading: "처리 중...",
      error: "오류가 발생했습니다",
      success: "성공!",
      tryAgain: "다시 시도",
      chooseFiles: "파일 선택",
      dropFiles: "파일을 여기에 드롭하거나 클릭하여 탐색"
    },
    footer: {
      about: "회사 소개",
      privacy: "개인정보 보호정책",
      terms: "서비스 약관",
      contact: "연락처",
      copyright: "© 2024 PDF Tools. 모든 권리 보유."
    }
  }
};

/**
 * Get translation for a specific language
 */
export function getTranslation(langCode: string): Translation {
  return translations[langCode] || translations.en;
}

/**
 * Get translated text using dot notation
 * Example: t('hero.title', 'en') -> "Every tool you need to work with PDFs in one place"
 */
export function t(key: string, langCode: string = 'en'): string {
  const translation = getTranslation(langCode);
  const keys = key.split('.');
  
  let result: any = translation;
  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) break;
  }
  
  return result || key;
}