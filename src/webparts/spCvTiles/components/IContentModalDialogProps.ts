import { IContentTile } from '../SpCvTilesWebPart';

export interface IContentModalDialogProps {
  isOpen: boolean;
  onDismiss: () => void;
  contentData: IContentTile | undefined;
  isDarkTheme: boolean;
}