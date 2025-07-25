/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { GraphQLSchema, GraphQLNamedType } from 'graphql';
import { OnClickFieldFunction, OnClickTypeFunction } from './types';
type SearchResultsProps = {
    schema: GraphQLSchema;
    withinType?: GraphQLNamedType;
    searchValue: string;
    onClickType: OnClickTypeFunction;
    onClickField: OnClickFieldFunction;
};
export default class SearchResults extends React.Component<SearchResultsProps, {}> {
    shouldComponentUpdate(nextProps: SearchResultsProps): boolean;
    render(): React.JSX.Element;
}
export {};
