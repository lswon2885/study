import styled from 'styled-components';

const Paragraph = styled.p`
  color: #00F;

  strong {
    font-size: 2em;
    color: #F00;
  }
`;

const BigParagraph = styled(Paragraph)`
	font-size: 5rem;
`;

export default function Header() {
  return (
    <div>
      <BigParagraph>
        <h1>
          메가테라 푸드코트 키오스크!
          <strong>!</strong>
        </h1>
      </BigParagraph>
    </div>
  );
}
