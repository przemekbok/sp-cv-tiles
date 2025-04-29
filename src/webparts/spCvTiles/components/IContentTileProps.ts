import { IContentTile } from '../SpCvTilesWebPart';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IContentTileProps {
  item: IContentTile;
  context: WebPartContext;
}