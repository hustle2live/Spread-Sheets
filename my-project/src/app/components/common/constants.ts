enum PageDir {
   HOMEPAGE = 'homepage',
   DOCUMENT_FORMATION = 'documents-formation',
   ACCOUNTING_SYSTEM = 'accounting-system',
   GROUP_CASH_FLOW = 'group-cash-flow',
   PUBLIC_ACCOUNTING = 'public-accounting',
   SMALL_PRODUCTION = 'small-production'
}

const BaseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH ?? '' : '';

type PDFSType = Record<PageDir, string[]>;

const PDFsDirPath: PDFSType = {
   [PageDir.HOMEPAGE]: [
      `${BaseUrl}/pdf/${PageDir.HOMEPAGE}/1.pdf`,
      `${BaseUrl}/pdf/${PageDir.HOMEPAGE}/2.pdf`,
      `${BaseUrl}/pdf/${PageDir.HOMEPAGE}/3.pdf`,
      `${BaseUrl}/pdf/${PageDir.HOMEPAGE}/4.pdf`,
      `${BaseUrl}/pdf/${PageDir.HOMEPAGE}/5.pdf`,
   ],
   [PageDir.DOCUMENT_FORMATION]: [
      `${BaseUrl}/pdf/${PageDir.DOCUMENT_FORMATION}/1.pdf`,
      `${BaseUrl}/pdf/${PageDir.DOCUMENT_FORMATION}/2.pdf`,
      `${BaseUrl}/pdf/${PageDir.DOCUMENT_FORMATION}/3.pdf`,
      `${BaseUrl}/pdf/${PageDir.DOCUMENT_FORMATION}/4.pdf`
   ],
   [PageDir.ACCOUNTING_SYSTEM]: [
      `${BaseUrl}/pdf/Salary-1.pdf`,
      `${BaseUrl}/pdf/Salary-2.pdf`,
      `${BaseUrl}/pdf/Time-table.pdf`,
      `${BaseUrl}/pdf/TTN-form.pdf`,
      `${BaseUrl}/pdf/TTN-journal.pdf`
   ],
   [PageDir.GROUP_CASH_FLOW]: [
      `${BaseUrl}/pdf/Salary-1.pdf`,
      `${BaseUrl}/pdf/Salary-2.pdf`,
      `${BaseUrl}/pdf/Time-table.pdf`,
      `${BaseUrl}/pdf/TTN-form.pdf`,
      `${BaseUrl}/pdf/TTN-journal.pdf`
   ],
   [PageDir.PUBLIC_ACCOUNTING]: [
      `${BaseUrl}/pdf/Salary-1.pdf`,
      `${BaseUrl}/pdf/Salary-2.pdf`,
      `${BaseUrl}/pdf/Time-table.pdf`,
      `${BaseUrl}/pdf/TTN-form.pdf`,
      `${BaseUrl}/pdf/TTN-journal.pdf`
   ],
   [PageDir.SMALL_PRODUCTION]: [
      `${BaseUrl}/pdf/Salary-1.pdf`,
      `${BaseUrl}/pdf/Salary-2.pdf`,
      `${BaseUrl}/pdf/Time-table.pdf`,
      `${BaseUrl}/pdf/TTN-form.pdf`,
      `${BaseUrl}/pdf/TTN-journal.pdf`
   ]
} as const;

export { PageDir, BaseUrl, PDFsDirPath };
