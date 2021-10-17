export const handleInicio = ( e ) => {

    e.preventDefault();
    document.getElementById( 'inicio' ).scrollIntoView({
        behavior: 'smooth'
    });

};

export const handleSkills = ( e ) => {

    e.preventDefault();
    document.getElementById( 'skills' ).scrollIntoView({
        behavior: 'smooth'
    });

};

export const handlePortfolio = ( e ) => {

    e.preventDefault();
    document.getElementById( 'portfolio' ).scrollIntoView({
        behavior: 'smooth'
    });

};

export const handleContacto = ( e ) => {

    e.preventDefault();
    document.getElementById( 'contacto' ).scrollIntoView({
        behavior: 'smooth'
    });

};
