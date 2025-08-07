import React from 'react';
import './NextActionsCard.css';

const NextActionsCard = ({ soilHealth }) => {
    if (!soilHealth) {
        return <div>Loading soil health data...</div>;
    }

    const suggestions = [];

    if (soilHealth.organicMatter < 3) {
        suggestions.push("Consider adding organic matter to improve soil health.");
    }
    if (soilHealth.nutrients.nitrogen < 50) {
        suggestions.push("Increase nitrogen levels through cover cropping or organic fertilizers.");
    }
    if (soilHealth.microbialActivity < 60) {
        suggestions.push("Enhance microbial activity by applying compost or mulch.");
    }
    if (soilHealth.nutrients.phosphorus < 20) {
        suggestions.push("Apply phosphorus fertilizers to enhance plant growth.");
    }
    if (soilHealth.nutrients.potassium < 30) {
        suggestions.push("Consider potassium sources like greensand or wood ashes.");
    }

    return (
        <div className="next-actions-card card">
            <h3 className="card-title">Next Suggested Actions </h3> {/* Made bold through class */}
            <ul>
                {suggestions.length > 0 ? (
                    suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                    ))
                ) : (
                    <li>No suggestions available. Your soil health indicators are good!</li>
                )}
            </ul>
        </div>
    );
};

export default NextActionsCard;
