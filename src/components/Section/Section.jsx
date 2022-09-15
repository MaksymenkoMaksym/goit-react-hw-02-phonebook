import { SectionStyled, TitleSection } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <TitleSection>{title}</TitleSection>
      {children}
    </SectionStyled>
  );
};

export default Section;
