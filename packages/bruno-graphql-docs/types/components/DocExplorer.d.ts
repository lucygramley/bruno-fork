/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import React, { ReactNode } from 'react';
import { GraphQLSchema, GraphQLNamedType, GraphQLError } from 'graphql';
import { FieldType } from './DocExplorer/types';
type NavStackItem = {
    name: string;
    title?: string;
    search?: string;
    def?: GraphQLNamedType | FieldType;
};
type DocExplorerProps = {
    schema?: GraphQLSchema | null;
    schemaErrors?: readonly GraphQLError[];
    children?: ReactNode | null;
};
type DocExplorerState = {
    navStack: NavStackItem[];
};
/**
 * DocExplorer
 *
 * Shows documentations for GraphQL definitions from the schema.
 *
 * Props:
 *
 *   - schema: A required GraphQLSchema instance that provides GraphQL document
 *     definitions.
 *
 * Children:
 *
 *   - Any provided children will be positioned in the right-hand-side of the
 *     top bar. Typically this will be a "close" button for temporary explorer.
 *
 */
export declare class DocExplorer extends React.Component<DocExplorerProps, DocExplorerState> {
    constructor(props: DocExplorerProps);
    shouldComponentUpdate(nextProps: DocExplorerProps, nextState: DocExplorerState): boolean;
    render(): React.JSX.Element;
    showDoc(typeOrField: GraphQLNamedType | FieldType): void;
    showDocForReference(reference: any): void;
    showSearch(search: string): void;
    reset(): void;
    handleNavBackClick: () => void;
    handleClickType: (type: GraphQLNamedType) => void;
    handleClickField: (field: FieldType) => void;
    handleSearch: (value: string) => void;
}
export {};
