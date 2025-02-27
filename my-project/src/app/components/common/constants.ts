'use client';

enum PageDir {
   HOMEPAGE = 'homepage',
   DOCUMENT_FORMATION = 'documents-formation',
   ACCOUNTING_SYSTEM = 'accounting-system',
   GROUP_CASH_FLOW = 'group-cash-flow',
   PUBLIC_ACCOUNTING = 'public-accounting',
   SMALL_PRODUCTION = 'small-production'
}

// const BaseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH ?? '' : '';

const BaseUrl = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

type PDFSType = Record<PageDir, string[]>;

const PDFsDirPath: PDFSType = {
   [PageDir.HOMEPAGE]: [
      `${BaseUrl}/pdf/${PageDir.HOMEPAGE}/1.pdf`,
      `${BaseUrl}/pdf/${PageDir.HOMEPAGE}/2.pdf`,
      `${BaseUrl}/pdf/${PageDir.HOMEPAGE}/3.pdf`,
      `${BaseUrl}/pdf/${PageDir.HOMEPAGE}/4.pdf`,
      `${BaseUrl}/pdf/${PageDir.HOMEPAGE}/5.pdf`
   ],
   [PageDir.DOCUMENT_FORMATION]: [
      `${BaseUrl}/pdf/${PageDir.DOCUMENT_FORMATION}/1.pdf`,
      `${BaseUrl}/pdf/${PageDir.DOCUMENT_FORMATION}/2.pdf`,
      `${BaseUrl}/pdf/${PageDir.DOCUMENT_FORMATION}/3.pdf`,
      `${BaseUrl}/pdf/${PageDir.DOCUMENT_FORMATION}/4.pdf`
   ],
   [PageDir.ACCOUNTING_SYSTEM]: [
      `${BaseUrl}/pdf/${PageDir.ACCOUNTING_SYSTEM}/1.pdf`,
      `${BaseUrl}/pdf/${PageDir.ACCOUNTING_SYSTEM}/2.pdf`,
      `${BaseUrl}/pdf/${PageDir.ACCOUNTING_SYSTEM}/3.pdf`,
      `${BaseUrl}/pdf/${PageDir.ACCOUNTING_SYSTEM}/4.pdf`,
      `${BaseUrl}/pdf/${PageDir.ACCOUNTING_SYSTEM}/5.pdf`,
      `${BaseUrl}/pdf/${PageDir.ACCOUNTING_SYSTEM}/6.pdf`,
      `${BaseUrl}/pdf/${PageDir.ACCOUNTING_SYSTEM}/7.pdf`
   ],
   [PageDir.PUBLIC_ACCOUNTING]: [
      `${BaseUrl}/pdf/${PageDir.PUBLIC_ACCOUNTING}/1.pdf`,
      `${BaseUrl}/pdf/${PageDir.PUBLIC_ACCOUNTING}/2.pdf`,
      `${BaseUrl}/pdf/${PageDir.PUBLIC_ACCOUNTING}/3.pdf`,
      `${BaseUrl}/pdf/${PageDir.PUBLIC_ACCOUNTING}/4.pdf`,
      `${BaseUrl}/pdf/${PageDir.PUBLIC_ACCOUNTING}/5.pdf`,
      `${BaseUrl}/pdf/${PageDir.PUBLIC_ACCOUNTING}/6.pdf`,
      `${BaseUrl}/pdf/${PageDir.PUBLIC_ACCOUNTING}/7.pdf`,
      `${BaseUrl}/pdf/${PageDir.PUBLIC_ACCOUNTING}/8.pdf`,
      `${BaseUrl}/pdf/${PageDir.PUBLIC_ACCOUNTING}/9.pdf`,
      `${BaseUrl}/pdf/${PageDir.PUBLIC_ACCOUNTING}/10.pdf`,
      `${BaseUrl}/pdf/${PageDir.PUBLIC_ACCOUNTING}/11.pdf`
   ],
   [PageDir.SMALL_PRODUCTION]: [
      `${BaseUrl}/pdf/${PageDir.SMALL_PRODUCTION}/1.pdf`,
      `${BaseUrl}/pdf/${PageDir.SMALL_PRODUCTION}/2.pdf`,
      `${BaseUrl}/pdf/${PageDir.SMALL_PRODUCTION}/3.pdf`,
      `${BaseUrl}/pdf/${PageDir.SMALL_PRODUCTION}/4.pdf`,
      `${BaseUrl}/pdf/${PageDir.SMALL_PRODUCTION}/5.pdf`,
      `${BaseUrl}/pdf/${PageDir.SMALL_PRODUCTION}/6.pdf`,
      `${BaseUrl}/pdf/${PageDir.SMALL_PRODUCTION}/7.pdf`,
      `${BaseUrl}/pdf/${PageDir.SMALL_PRODUCTION}/8.pdf`,
      `${BaseUrl}/pdf/${PageDir.SMALL_PRODUCTION}/9.pdf`
   ],
   [PageDir.GROUP_CASH_FLOW]: [
      `${BaseUrl}/pdf/${PageDir.GROUP_CASH_FLOW}/1.pdf`,
      `${BaseUrl}/pdf/${PageDir.GROUP_CASH_FLOW}/2.pdf`,
      `${BaseUrl}/pdf/${PageDir.GROUP_CASH_FLOW}/3.pdf`,
      `${BaseUrl}/pdf/${PageDir.GROUP_CASH_FLOW}/4.pdf`,
      `${BaseUrl}/pdf/${PageDir.GROUP_CASH_FLOW}/5.pdf`,
      `${BaseUrl}/pdf/${PageDir.GROUP_CASH_FLOW}/6.pdf`,
      `${BaseUrl}/pdf/${PageDir.GROUP_CASH_FLOW}/7.pdf`
   ]
} as const;

export { PageDir, BaseUrl, PDFsDirPath };
