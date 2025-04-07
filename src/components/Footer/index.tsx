import React, { ReactNode } from "react";
import styles from "./Footer.module.css";
import FooterSection from "./FooterSection";
import Divider from "../Divider";
import { LogoVerdeIcon } from "../../common/icons";
import Typography from "../Typography";

type Section = {
  title: string;
  items: string[];
};

type FooterProps = {
  sections: Section[];
  paymentIcons: ReactNode[];
  socialIcons: ReactNode[];
};

export default function Footer({
  sections,
  paymentIcons,
  socialIcons,
}: FooterProps) {
  return (
    <>
      <footer className={styles.footer}>
        <section className="container">
          <div className={styles.sectionsContainer}>
            <div className={styles.logoAndSlogan}>
              <LogoVerdeIcon />
              <Typography className={styles.sloganText}>
                Hora de abraçar seu lado geek!
              </Typography>
            </div>

            {sections.map((section, index) => (
              <FooterSection
                key={`footer-item-${index}`}
                title={section.title}
              >
                <ul>
                  {section?.items.map((item) => (
                    <li key={`footer-item-${item}`}>{item}</li>
                  ))}
                </ul>
              </FooterSection>
            ))}
          </div>
          <Divider />

          <div className={styles.sectionsContainer}>
            <FooterSection title="Formas de Pagamento" >
              <div className={styles.paymentIcons}>
                {paymentIcons.map((icon) => icon)}
              </div>
            </FooterSection>
            <FooterSection title="Siga nossas redes" >
              <div className={styles.socialIcons}>
                {socialIcons.map((icon) => icon)}
              </div>
            </FooterSection>
          </div>
          
        </section >
      </footer >
      <div className={styles.copryright}>
        <Typography variantStyle="body">
          Desenvolvido por Alura. Projeto fictício sem fins comerciais.
        </Typography>
      </div>
    </>
  );
}
