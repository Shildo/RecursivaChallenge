import FileUploader from "@/components/FileUploader/FileUploader";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<FileUploader />
		</main>
	);
}
