/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import React, { ChangeEventHandler } from 'react';
type OnSearchFn = (value: string) => void;
type SearchBoxProps = {
    value?: string;
    placeholder: string;
    onSearch: OnSearchFn;
};
type SearchBoxState = {
    value: string;
};
export default class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
    debouncedOnSearch: OnSearchFn;
    constructor(props: SearchBoxProps);
    render(): React.JSX.Element;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleClear: () => void;
}
export {};
