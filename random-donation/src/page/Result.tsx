import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FeedBack from "../component/Result/FeedBack";
import RankList from "../component/Result/RankList";
import ResultText from "../component/Result/ResultText";

import { device, min_device } from "../services/devices";
import thankYou from "../assets/thanks.png";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    font-size: 15px;

    @media ${min_device.tablet} {
        overflow: hidden;
        height: 100vh;
    }
    @media ${device.tablet} {
        font-size: 14px;
    }
`;
const ResultWrapper = styled.div`
    width: 940px;
    height: 100%;
    margin: 0 auto;

    @media ${min_device.tablet} {
        padding: 20px;
    }
    @media ${device.tablet} {
        width: 90%;
        margin: 30px auto;
    }
`;
const Top = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;

    @media ${device.tablet} {
        display: block;
    }
`;
const Bottom = styled.div`
    @media ${min_device.tablet} {
        margin: 2% 0;
        width: 100%;
        height: 90%;
    }
    @media ${device.tablet} {
        margin-top: 25px;
    }
`;
const RightContent = styled.div`
    width: 35%;

    @media ${device.tablet} {
        width: 100%;
        margin-top: 25px;
    }
`;
const BannerContent = styled.div`
    @media ${min_device.tablet} {
        height: 35%;
        display: flex;
        flex-direction: column-reverse;
    }
`;
const Banner = styled.img`
    width: 100%;
    cursor: pointer;
    @media ${device.tablet} {
        margin-top: 25px;
        height: 370px;
    }
    @media (max-width: 750px) {
        height: 340px;
    }
    @media (max-width: 630px) {
        height: 300px;
    }
    @media (max-width: 570px) {
        height: 280px;
    }
    @media (max-width: 540px) {
        height: 240px;
    }
    @media ${device.mobileL} {
        height: 220px;
    }
    @media (max-width: 400px) {
        height: 200px;
    }
    @media ${device.mobileM} {
        height: 170px;
    }
`;

const Result = (): JSX.Element => {
    const navigate = useNavigate();
    const userData = useSelector((state: any) => state.userData);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        setLoad(true);
        console.log(
            "%c 콘솔 에러 :" + "%c 지금 뭐하냐?!!?",
            "font-size:20px;color:red;background:#ffffff;font-weight:900;",
            "font-size:20px;color:green;background:#ffffff;font-weight:900;"
        );

        if (!userData || Object.keys(userData).length === 0)
            return navigate("/");

        setLoad(false);
    }, []);

    return (
        <>
            {!load && (
                <Container>
                    <ResultWrapper>
                        <Top>
                            <ResultText />
                            <RightContent>
                                <RankList />
                                <BannerContent>
                                    <a href="https://www.youtube.com/watch?v=VdVq1r7OdGM">
                                        <Banner src={thankYou} alt="배너 이미지" />
                                    </a>
                                </BannerContent>
                            </RightContent>
                        </Top>
                        <Bottom>
                            <FeedBack />
                        </Bottom>
                    </ResultWrapper>
                </Container>
            )}
        </>
    );
};

export default Result;
