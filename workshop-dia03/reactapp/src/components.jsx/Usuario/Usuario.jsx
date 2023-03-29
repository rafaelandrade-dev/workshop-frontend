import styles from "./Usuario.module.css"

function Usuario( {nome, idade, cargo, salario} ) {
    return(
        <div className={styles.divUser}>

            <img alt="foto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBcMFFEb6YuIwlttQKYlFbtOLfrGofU_eXLdfAUgSCQ&s"></img>
            <h1 className={styles.title}>{nome}</h1>
            <p>{idade}</p>
            <p>{cargo}</p>
            <p>{salario}</p>

        </div>
    )
}

export default Usuario