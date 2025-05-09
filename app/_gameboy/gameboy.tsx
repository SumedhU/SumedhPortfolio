import styles from "./style.gameboy.module.css"
export function Gameboy() {
        return (
          <>
            <div className={styles.frame}>
              <div className={styles.camera}>
                <div className={styles.map}>
                    <div className={styles.character}>
                        <div className={styles.shadow}></div>
                        <div className={styles.character_spritesheet}></div>
                    </div>
                </div>
              </div>
            </div>
            
          </>
        );
    }