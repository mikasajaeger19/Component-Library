import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2>A Thesis On Food Technology</h2>
        <div className='paper-status'>
            <p>approved</p>
        </div>
      </div>
      <div className='card-body'>
        <a href = 'https://cs.siu.edu/files/thesis.pdf'>https://cs.siu.edu/files/thesis.pdf</a>
        <div className='tags'>
            <div className = 'tag'>
                Machine Learning
            </div>
            <div className = 'tag'> 
                Cyber Security
            </div>
            <div className='tag'>
                Technology
            </div>
        </div>
      </div>
      <div className='card-footer'>
        <button>
            <img src={require('./down_arrow.png')} className='down-arrow'/>
            <p>comments</p>
        </button>
      </div>
    </div>
  )
}

export default Card
