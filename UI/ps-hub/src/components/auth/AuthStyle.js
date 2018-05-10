const authStyle = {
    root: {
        width: '100%',
        height: '100%',
    },
    heightFull: {
        height: '100%',
        padding: 0
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    overlay: { 
        position: 'absolute', 
        height: '100%', 
        width: '100%', 
        background: 'black', 
        opacity: 0.7, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        top: 0,
        display: 'flex' 
    },
    infoDiv: { 
        width: '100%',
        margin: 'auto', 
        marginBottom: '10%' 
    },
    title: { 
        color: 'white', 
        width: '100%', 
        textAlign: 'center' 
    },
    text: { 
        color: 'white', 
        width: '100%', 
        textAlign: 'center', 
        marginBottom: '0' 
    }
}

export default authStyle;
