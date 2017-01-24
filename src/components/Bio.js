import React from 'react';

const Bio = () => {
  const bioStyle = {
    height: '30vw',
    flex: .6,
    fontFamily: 'Hind Vadodara',
    color: 'white',
    fontSize: '1.1vw',
    textAlign: 'justify',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }

  return (
    <div style={bioStyle}>
      <p>
        Born and raised in La Crosse, Wisconsin, I moved to Vancouver in 2009 to
        take advantage of my dual citizenship. In 2013 I graduated from Trinity
        Western with a 3.3 GPA, finishing on the Dean's list my final four
        semesters. Following graduation, I spent 3 years working various jobs
        as I looked into different career options. During these 3 years, I was
        a landscaper, a pastor, a math tutor, a camp counselor, a security
        guard, and a care aide to people with disabilities. In the summer of
        2016, I started to work my way through some Code Academy courses in
        preparation for CodeCore's Web Development Bootcamp. I was hooked from
        the first time I was able to print "Hello World" to my console. Since
        then, I have earned my Certificate of Web Development and have been
        continuing my education through online courses and various side
        projects.
        Outside of coding, I enjoy running, hiking, poorly playing Mumford and
        Sons songs on guitar, and going out for good beer or good coffee. I'm
        currently looking for career opportunities in the Vancouver area. If
        you want to get in touch with me, feel free to contact me through any
        of the below links!
      </p>


    </div>
  )
}

export default Bio;
