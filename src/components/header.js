import React from 'react';
import { Jumbotron } from 'reactstrap';


function Header() {
    return (
        <header>
            <Jumbotron style={{ backgroundColor: '#e8e8e8', borderColor: '#dbdad7', borderRadius: "10px" }}>
                <h1 className="display-4 text-center mt-2">Ryan Doan</h1>
                <p className="lead p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui natus eius praesentium repudiandae dicta earum recusandae, aliquid molestiae dolorum iusto repellat sed amet aspernatur in nesciunt ipsum labore architecto.
                    Quibusdam quae, voluptatem vero eveniet, doloremque, inventore cum sed amet laborum veniam minima? Quisquam laudantium ducimus debitis distinctio similique qui! Est ab blanditiis odit?
                </p>
            </Jumbotron>
        </header>
    )
}


export default Header