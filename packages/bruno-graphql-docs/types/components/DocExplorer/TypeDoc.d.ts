/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { GraphQLSchema, GraphQLType } from 'graphql';
import { OnClickTypeFunction, OnClickFieldFunction } from './types';
type TypeDocProps = {
    schema: GraphQLSchema;
    type: GraphQLType;
    onClickType: OnClickTypeFunction;
    onClickField: OnClickFieldFunction;
};
type TypeDocState = {
    showDeprecated: boolean;
};
export default class TypeDoc extends React.Component<TypeDocProps, TypeDocState> {
    constructor(props: TypeDocProps);
    shouldComponentUpdate(nextProps: TypeDocProps, nextState: TypeDocState): boolean;
    render(): React.JSX.Element;
    handleShowDeprecated: () => void;
}
export {};
