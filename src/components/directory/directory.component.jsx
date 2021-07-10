import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

// Class component because it will keep the state and use props to put to sub components
class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sellItems: []
        };
    }

    componentDidMount(){
        fetch('items.json')
        .then(response => response.json())
        .then(name => this.setState({sellItems: name}));
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sellItems.map(({id, name}) => (
                        <MenuItem key={id} title={name}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;
