// Define o estilo básico para o título e o link
const styles = {
    title: {
        color: '#474747',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'center',
        width: '1200px'


    },
    link: {
        color: ' #C92071',
        fontSize: '18px',
        textDecoration: 'none',
    },
    container: (align) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '1200px',
        justifyContent: 'space-between',
    }),
};




const Section = ({ title, titleAlign = 'left', link, children }) => {
    return (
        <section style={{ marginLeft: '100px' }}>
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