import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageStyled = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

const Button = styled.button`
  background: #fff;
  border: 1px solid #333;
  padding: 8px 12px;
  border-radius: 4px;
  margin-top: 6px;
  cursor: pointer;
`;

interface MainImageProps {
  image: string;
  loading: boolean;
  onLoadClick: () => void;
  onResetClick: () => void;
}

export function MainImage({
  loading,
  image,
  onLoadClick,
  onResetClick,
}: MainImageProps) {
  return (
    <Wrap>
      {loading && '...loading...'}
      {image && <ImageStyled src={image} alt="loaded main image" />}

      {image ? (
        <Button onClick={onResetClick}>Reset Image</Button>
      ) : (
        <Button data-cy="load-btn" onClick={onLoadClick}>
          Load Image
        </Button>
      )}
    </Wrap>
  );
}
