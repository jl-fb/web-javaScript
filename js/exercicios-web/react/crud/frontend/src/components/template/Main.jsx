import React from 'react';
import './Main.css';
import Header from './Header';

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">{/*bootstrap  padding e mairgin-top*/}
                {props.children} {/**colocar tags filhas dentro dessa div */}
            </div>
        </main>
    </React.Fragment>