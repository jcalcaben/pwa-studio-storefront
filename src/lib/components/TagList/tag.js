import React from 'react';

// Use the prop-types module for type checking
import { string } from 'prop-types';

import { Link } from '@magento/venia-drivers';
import Button from '@magento/venia-ui/lib/components/Button';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './tag.css';

const categoryUrlSuffix = '.html';

// This is a component responsible for rendering a single tag
const Tag = props => {
    // Destructure the props object into variables
    const { value } = props;

    const { name, url_path } = value;
    const url = `/${url_path}${categoryUrlSuffix}`;

    const classes = mergeClasses(defaultClasses, props.classes);

    const buttonClasses = {
        root_lowPriority: classes.root,
        content: classes.content
    };

    // Return the tag string inside a list item element
    return (
        <Link className={classes.link} to={url}>
            <Button classes={buttonClasses} priority="low" type="button">
                {name}
            </Button>
        </Link>
    );
};

// Define the props this component accepts
Tag.propTypes = {
    value: string
};

// Make this function the default exported of this module
export default Tag;
