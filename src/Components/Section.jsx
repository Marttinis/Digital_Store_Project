

// Define o estilo básico para o título e o link
const styles = {
    title: {
        color: '#474747',
        fontSize: '24px',


    },
    link: {
        color: ' #C92071',
        fontSize: '18px',
        marginLeft: 'auto',
        textDecoration: 'none',
    },
    container: (align) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        gap: '8px',
    }),
};




const Section = ({ title, titleAlign = 'left', link, children }) => {
    return (
        <section>
            <div style={styles.container(titleAlign)}>
                <h2 style={styles.title}>{title}</h2>
                {link && (
                    <a href={link.href} style={styles.link}>
                        {link.text}<i class="bi bi-arrow-right"></i>
                    </a>

                )}
            </div>
            <div>{children}</div>
        </section>
    );
}

export default Section;