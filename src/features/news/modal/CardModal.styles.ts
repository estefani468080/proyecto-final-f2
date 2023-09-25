import styled from "styled-components";

export const TarjetaModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 60%;
  padding: 0;
  margin: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
`;

export const DescripcionModal = styled.p`
  width: 100%;
  max-width: 100%;
  max-height: 55%;
  font-size: 1.2rem;
  margin: 0;
  padding: 1rem 0;
  text-align: left;
  overflow-y: auto;
`;

export const ImagenModal = styled.img`
  width: 60%;
  height: 100%;
`;

export const TituloModal = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: left;
  width: 100%;
`;

export const CotenedorTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 45%;
  height: 100%;
  padding: 1rem;
  margin-top: 5rem;
`;
