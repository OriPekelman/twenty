import React from 'react';
import { useRecoilState } from 'recoil';

import { spreadsheetImportState } from '@/spreadsheet-import/states/spreadsheetImportState';

import { SpreadsheetImport } from './SpreadsheetImport';

type SpreadsheetImportProviderProps = React.PropsWithChildren;

export const SpreadsheetImportProvider = (
  props: SpreadsheetImportProviderProps,
) => {
  const [spreadsheetImport, setSpreadsheetImport] = useRecoilState(
    spreadsheetImportState,
  );

  function handleClose() {
    setSpreadsheetImport({
      isOpen: false,
      options: null,
    });
  }

  return (
    <>
      {props.children}
      {spreadsheetImport.isOpen && spreadsheetImport.options && (
        <SpreadsheetImport
          isOpen={true}
          onClose={handleClose}
          {...spreadsheetImport.options}
        />
      )}
    </>
  );
};
