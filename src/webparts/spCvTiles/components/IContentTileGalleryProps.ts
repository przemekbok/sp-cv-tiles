import { WebPartContext } from '@microsoft/sp-webpart-base';
import { IContentTile } from '../SpCvTilesWebPart';

export interface IContentTileGalleryProps {
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  contentItems: IContentTile[];
  isLoading: boolean;
  itemsPerPage: number;
  context: WebPartContext;
}