import { EntityMetadataMap } from '@ngrx/data/src';

const entityMetadata: EntityMetadataMap = {
    Post: {},
};

// because the plural of "hero" is not "heros"
const pluralNames = { Post: 'Posts'};

export const entityConfig = {
    entityMetadata,
    pluralNames
};

