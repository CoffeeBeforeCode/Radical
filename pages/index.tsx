/**
 * Minimal Homepage - Phillip Collins Global Leadership Coach
 * 
 * Purpose: Standalone homepage that builds successfully without dependencies.
 * Uses inline styles and Next.js Head component only. Once this works,
 * we can systematically add components one at a time.
 * 
 * Design Philosophy:
 * - Typography-first approach with breakthrough copy
 * - Strategic color usage from brand palette
 * - Authentic content over template conventions
 * - Mobile-first responsive design
 * 
 * Dependencies: None - completely standalone
 */

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Phillip Collins | Global Leadership Coach</title>
        <meta name="description" content="Global Leadership Coach specialising in reducing interference through embodied perception. Working with senior executives across Europe, Middle East, Americas, and Asia Pacific." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://phillip-collins.com/" />
        
        {/* Google Fonts - Waiting for the Sunrise + Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
        {/* Simple Header */}
        <header style={{ 
          borderBottom: '1px solid rgba(26, 54, 93, 0.1)',
          padding: '1rem 0'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h1 style={{ 
                fontFamily: "'Waiting for the Sunrise', cursive",
                fontSize: '1.5rem',
                color: '#1A365D',
                margin: 0
              }}>
                Phillip Collins
              </h1>
              <p style={{ 
                fontSize: '0.875rem',
                color: '#4A4A4A',
                margin: 0
              }}>
                Global Leadership Coach
              </p>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main>
          <section style={{ 
            padding: '4rem 1rem',
            textAlign: 'center',
            backgroundColor: 'white'
          }}>
            <div style={{ 
              maxWidth: '1200px', 
              margin: '0 auto'
            }}>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                color: '#1A365D',
                margin: '0 0 1.5rem 0',
                lineHeight: 1.1
              }}>
                Not a title. Not a goal. A{' '}
                <span style={{ 
                  fontFamily: "'Waiting for the Sunrise', cursive",
                  color: '#F96E1E'
                }}>
                  practice
                </span>
                .
              </h1>
              
              <p style={{ 
                fontSize: '1.25rem',
                color: '#4A4A4A',
                margin: '0 0 2rem 0'
              }}>
                (Leadership, redefined.)
              </p>

              <div style={{ 
                maxWidth: '600px',
                margin: '0 auto 3rem auto'
              }}>
                <p style={{ 
                  fontSize: '1.125rem',
                  color: '#4A4A4A',
                  margin: '0 0 1.5rem 0'
                }}>
                  The strongest leaders I know don&apos;t arrive — they return.<br />
                  Again and again. To their values. Their vision. Their self.
                </p>
                
                <p style={{ 
                  fontSize: '1.125rem',
                  color: '#4A4A4A',
                  margin: '0 0 1.5rem 0'
                }}>
                  I create the space for that return —<br />
                  to what matters, what&apos;s emerging, and what&apos;s getting in the way.
                </p>
                
                <p style={{ 
                  fontSize: '1.25rem',
                  color: '#1A365D',
                  fontWeight: 500,
                  margin: 0
                }}>
                  Not louder. Just wiser.
                </p>
              </div>

              <button style={{ 
                backgroundColor: '#F96E1E',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                fontSize: '1.125rem',
                fontWeight: 500,
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Begin here
              </button>
            </div>
          </section>

          {/* Leadership Equation Section */}
          <section style={{ 
            padding: '4rem 1rem',
            backgroundColor: '#F8F5EB'
          }}>
            <div style={{ 
              maxWidth: '1200px', 
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <h2 style={{ 
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#1A365D',
                margin: '0 0 2rem 0'
              }}>
                The Leadership Equation
              </h2>
              
              <div style={{ 
                fontSize: '3rem',
                fontFamily: "'Waiting for the Sunrise', cursive",
                color: '#7E2D40',
                margin: '0 0 2rem 0'
              }}>
                PE = PO - I
              </div>
              
              <p style={{ 
                fontSize: '1.25rem',
                color: '#4A4A4A',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                <strong>Performance</strong> equals <strong>Potential</strong> minus <strong>Interference</strong>.
                <br /><br />
                When we reduce the stuff that gets in your way, your natural leadership emerges.
              </p>
            </div>
          </section>

          {/* Testimonial Section */}
          <section style={{ 
            padding: '4rem 1rem',
            backgroundColor: 'white'
          }}>
            <div style={{ 
              maxWidth: '1200px', 
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <h2 style={{ 
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#1A365D',
                margin: '0 0 3rem 0'
              }}>
                Reflections from leaders
              </h2>
              
              <div style={{ 
                backgroundColor: '#F8F5EB',
                padding: '2rem',
                borderRadius: '8px',
                maxWidth: '600px',
                margin: '0 auto',
                position: 'relative',
                fontStyle: 'italic'
              }}>
                <div style={{ 
                  position: 'absolute',
                  top: '0.5rem',
                  left: '0.5rem',
                  fontSize: '3rem',
                  color: '#7E2D40',
                  fontFamily: "'Waiting for the Sunrise', cursive"
                }}>
                  &ldquo;
                </div>
                
                <p style={{ 
                  fontSize: '1.125rem',
                  margin: '0 0 1rem 0',
                  paddingLeft: '2rem'
                }}>
                  My team and I have never had such honest conversations with each other, 
                  until I started working with Phillip. His ability to create a safe space 
                  where challenging topics can be discussed has transformed how we operate 
                  as a leadership team.
                </p>
                
                <p style={{ 
                  textAlign: 'right',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#7E2D40',
                  fontStyle: 'normal',
                  margin: 0
                }}>
                  Country Head<br />
                  Telecommunications
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{ 
            padding: '4rem 1rem',
            backgroundColor: '#1A365D',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{ 
              maxWidth: '1200px', 
              margin: '0 auto'
            }}>
              <h2 style={{ 
                fontSize: '2.5rem',
                fontWeight: 700,
                margin: '0 0 1.5rem 0'
              }}>
                Ready to explore what&apos;s getting in your way?
              </h2>
              
              <p style={{ 
                fontSize: '1.125rem',
                margin: '0 0 2rem 0',
                opacity: 0.9
              }}>
                No funnel. No pressure.<br />
                Just a human conversation.
              </p>
              
              <button style={{ 
                backgroundColor: '#F96E1E',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                fontSize: '1.125rem',
                fontWeight: 500,
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Let's talk
              </button>
            </div>
          </section>
        </main>

        {/* Simple Footer */}
        <footer style={{ 
          backgroundColor: '#1A365D',
          color: 'white',
          padding: '2rem 1rem'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontFamily: "'Waiting for the Sunrise', cursive",
              fontSize: '1.25rem',
              color: '#D4B86A',
              margin: '0 0 1rem 0'
            }}>
              Leadership is a <strong>practice</strong>, not a destination
            </p>
            
            <p style={{ 
              fontSize: '0.875rem',
              opacity: 0.7,
              margin: 0
            }}>
              © 2025 Phillip Collins. Reducing interference since 2011.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
