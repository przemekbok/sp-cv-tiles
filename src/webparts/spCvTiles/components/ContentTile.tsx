import * as React from 'react';
import styles from './ContentTile.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { IContentTileProps } from './IContentTileProps';

const ContentTile: React.FC<IContentTileProps> = (props) => {
  const { item } = props;

  const handleTileClick = (): void => {
    // If there's a link URL, navigate to that URL
    if (item.linkUrl) {
      window.open(item.linkUrl, '_blank');
    }
  };

  return (
    <div 
      className={styles.tileContainer}
      onClick={handleTileClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleTileClick();
        }
      }}
    >
      <div className={styles.contentContainer}>
        <h3 className={styles.title} title={item.title}>
          {escape(item.title)}
        </h3>
        <p className={styles.description} title={item.description}>
          {escape(item.description.length > 120 ? item.description.substring(0, 120) + '...' : item.description)}
        </p>
        <div className={styles.readMoreLink}>
          Read More →
        </div>
      </div>
    </div>
  );
};

export default ContentTile;