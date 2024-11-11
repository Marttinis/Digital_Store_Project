

// Define o estilo básico para o título e o link
const styles = {
    title: {
        color: '#474747',
        fontSize: '24px',
        backgroundColor: '#E5E5E5',



    },
    link: {
        color: ' #C92071',
        fontSize: '18px',
        marginLeft: 'auto',
        textDecoration: 'none',
        backgroundColor: '#E5E5E5',
    },
    container: (align) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        gap: '8px',
        backgroundColor: '#E5E5E5',
    }),
};




const Section = ({ title, titleAlign = 'left', link, children }) => {
    return (
        <section style={{backgroundColor: '#F5F5F5'}}> 
            <div style={styles.container(titleAlign)}>
                <h2 style={styles.title}>{title}</h2>
                {link && (
                    <a href={link.href} style={styles.link}>
                        {link.text}<i className="bi bi-arrow-right"></i>
                    </a>

                )}
            </div>
            <div>{children}</div>
        </section>
    );
}

export default Section;