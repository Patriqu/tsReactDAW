//import { ClientComponent } from 'next/client-component'

'use client';
import React from 'react';

export default class SupersawButton extends React.Component<{ onClick: any, title: string }> {
    render() {
        let {onClick, title} = this.props;
        return <button onClick={onClick}>{title ?? 'Click me'}</button>
    }
}