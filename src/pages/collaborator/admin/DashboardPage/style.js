import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Dashboard = styled.main`
  min-height: 100vh;
  background: linear-gradient(135deg, var(--primary-color-50), var(--primary-color));
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 500px;
  margin-top: 57px;
  @media (min-width: 1024px) {
    margin-left: 77px;
    margin-top: 0px;
  }
`;

export const DashboardNavContainer = styled.div`
  height: fit-content;
  width: 100%;
  background-color: var(--secondary-color);
  border-bottom: 3px solid var(--primary-color);
  margin-bottom: 25px;
  @media (min-width: 1024px) {
    background-color: inherit;
    border: none;
    margin-bottom: 0px;
    width: 90%;
  }
`;

export const DashboardNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  justify-self: flex-start;
  button {
    background-color: inherit;
  }
  form {
    height: fit-content;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    color: white;
    display: flex;
    gap: 10px;
    align-items: center;
    
    @media (min-width: 1024px) {
      color: var(--primary-color);
      background-color: white;
    }
    input {
      background-color: inherit;
      font-family: "Noto Serif", serif;
      font-size: 16px;
      line-height: 22px;
      padding: 4px 2px;
      font-weight: 600;
    }
    input::placeholder {
      color: white;
      @media (min-width: 1024px) {
        color: var(--primary-color);
      }
    }
  }
  @media (min-width: 1024px) {
    padding: 40px 0px;
  }
`;
export const DashboardHeader = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1.5px solid var(--secondary-color);
  border-bottom: 1.5px solid var(--secondary-color);
  padding: 20px 10px;
  margin-bottom: 25px;
  @media (min-width: 1024px) {
    padding: 40px 50px;
    margin-bottom: none;
  }
  h2 {
    color: var(--secondary-color);
    font-family: "Noto Serif", serif;
    font-size: 23px;
  }
  button {
    padding: 10px;
    border-radius: 10px;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-weight: 700;
    font-size: 16px;
    box-shadow: 0px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const DashboardProductsContainer = styled.ul`
  list-style: none;
  width: 90%;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ConfirmsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  background-color: var(--secondary-color);
  color: var(--primary-color);

  h2 {
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
  }

  button {
    width: 49%;
    max-width: 150px;

    margin-right: 10px;
    margin-bottom: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
