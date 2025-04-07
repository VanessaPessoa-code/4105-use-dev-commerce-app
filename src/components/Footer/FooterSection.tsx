import styles from "./FooterSection.module.css";
import Typography from "../Typography";

type FooterSectionProps = {
  readonly title: string;
  children: React.ReactNode;
};

export default function FooterSection({
  title,
  children,
  ...props
}: FooterSectionProps) {
  return (
    <div className={styles.section} {...props}>
      <Typography variantStyle="body-large-bold">{title}</Typography>
      {children}
    </div>
  );
}
