import propTypes from "prop-types";
import ContestPreview from "./ContestPreview";
import React from "react";


const ContestList = ({ contests, onContestClick }) => (
    <div>
      {Object.keys(contests).map(contestId => (
        <ContestPreview key={contestId} onClick={onContestClick} {...contests[contestId]} />
      ))}
    </div>
  
);

ContestList.propTypes = {
  contests: propTypes.object,
  onContestClick: propTypes.func.isRequired
};

export default ContestList;
