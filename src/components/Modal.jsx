import React from "react";

const Modal = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>✖</button>

                <div className="modal-content">
                    <img
                        className="modal-poster"
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                : "./no-poster.png"
                        }
                        alt={movie.title}
                    />

                    <div className="modal-details">
                        <h2>{movie.title}</h2>
                        <p className="modal-overview">{movie.overview || "No description available."}</p>

                        <div className="modal-info">
                            <p><strong>Release Date:</strong> {movie.release_date || "N/A"}</p>
                            <p><strong>Rating:</strong> {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
                            <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
