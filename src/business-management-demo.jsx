import React, { useState } from 'react';
import { BarChart3, Package, Users, FileText, TrendingUp, Circle } from 'lucide-react';

export default function BusinessManagementSystem() {
  const [activeSection, setActiveSection] = useState('portfolio');
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const sections = [
    { id: 'portfolio', label: 'Portfolio', icon: BarChart3 },
    { id: 'grocery', label: 'Grocery', icon: Package },
    { id: 'hospitality', label: 'Hospitality', icon: Users },
    { id: 'farmstall', label: 'Farm Stall', icon: TrendingUp },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  const businessData = [
    {
      id: 1,
      name: 'KwikSpar Brackenfell',
      type: 'grocery',
      monthlyRevenue: 'R 1,245,680',
      dailyAvg: 'R 41,523',
      trend: '+12%',
      profit: 'R 186,852',
      margin: '15%'
    },
    {
      id: 2,
      name: 'OK Foods Bellville',
      type: 'grocery',
      monthlyRevenue: 'R 987,340',
      dailyAvg: 'R 32,911',
      trend: '+8%',
      profit: 'R 128,355',
      margin: '13%'
    },
    {
      id: 3,
      name: 'Rooiberg Farm Stall',
      type: 'farmstall',
      monthlyRevenue: 'R 234,560',
      dailyAvg: 'R 7,819',
      trend: '+24%',
      profit: 'R 81,996',
      margin: '35%'
    },
    {
      id: 4,
      name: 'Mountain View Guest House',
      type: 'hospitality',
      monthlyRevenue: 'R 156,780',
      dailyAvg: 'R 5,226',
      trend: '+15%',
      profit: 'R 62,712',
      margin: '40%'
    },
    {
      id: 5,
      name: 'Klipheuwel Lodge',
      type: 'hospitality',
      monthlyRevenue: 'R 142,890',
      dailyAvg: 'R 4,763',
      trend: '+18%',
      profit: 'R 57,156',
      margin: '40%'
    },
    {
      id: 6,
      name: 'Sunrise Manor B&B',
      type: 'hospitality',
      monthlyRevenue: 'R 98,450',
      dailyAvg: 'R 3,282',
      trend: '+22%',
      profit: 'R 38,395',
      margin: '39%'
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a)',
      color: '#f5f5f5',
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      padding: '0',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <header style={{
        borderBottom: '1px solid #2a2a2a',
        padding: '1.5rem 3rem',
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        animation: 'slideDown 0.6s ease-out'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '2rem',
            fontWeight: 400,
            letterSpacing: '0.02em',
            color: '#fff'
          }}>
            Command Center
          </h1>
          <div style={{
            fontSize: '0.875rem',
            color: '#999',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            February 2026
          </div>
        </div>
      </header>

      <div style={{ 
        display: 'flex',
        maxWidth: '1400px',
        margin: '0 auto',
        height: 'calc(100vh - 89px)'
      }}>
        {/* Sidebar Navigation */}
        <nav style={{
          width: '240px',
          borderRight: '1px solid #2a2a2a',
          padding: '2rem 0',
          background: 'rgba(15, 15, 15, 0.5)',
          animation: 'slideRight 0.6s ease-out'
        }}>
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  background: activeSection === section.id ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                  border: 'none',
                  borderLeft: activeSection === section.id ? '2px solid #fff' : '2px solid transparent',
                  color: activeSection === section.id ? '#fff' : '#666',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  animation: `fadeIn 0.4s ease-out ${index * 0.1}s backwards`
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.color = '#ccc';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.color = '#666';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <Icon size={18} />
                {section.label}
              </button>
            );
          })}
        </nav>

        {/* Main Content */}
        <main style={{
          flex: 1,
          padding: '3rem',
          overflowY: 'auto',
          animation: 'fadeIn 0.6s ease-out'
        }}>
          {activeSection === 'portfolio' && (
            <div>
              <h2 style={{
                margin: '0 0 0.5rem 0',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: '#fff'
              }}>
                Business Portfolio
              </h2>
              <p style={{
                margin: '0 0 3rem 0',
                color: '#888',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.95rem'
              }}>
                All your ventures in one place
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '3rem'
              }}>
                {[
                  { label: 'Total Monthly Revenue', value: 'R 2,865,700', change: '+14%' },
                  { label: 'Total Profit', value: 'R 555,466', change: '+16%' },
                  { label: 'Active Businesses', value: '6', change: '0%' },
                  { label: 'Avg Margin', value: '27.2%', change: '+2%' }
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid #2a2a2a',
                      padding: '2rem',
                      borderRadius: '2px',
                      animation: `slideUp 0.5s ease-out ${index * 0.1}s backwards`,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#666',
                      fontFamily: '"Inter", sans-serif',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem'
                    }}>
                      {stat.label}
                    </div>
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: 300,
                      color: '#fff',
                      marginBottom: '0.5rem',
                      fontFamily: '"IBM Plex Mono", monospace',
                      letterSpacing: '-0.02em'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: stat.change.startsWith('+') ? '#4ade80' : '#666',
                      fontFamily: '"Inter", sans-serif'
                    }}>
                      {stat.change} vs last month
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid #2a2a2a',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr',
                  gap: '1rem',
                  padding: '1.5rem 2rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderBottom: '1px solid #2a2a2a',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.75rem',
                  color: '#666',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>
                  <div>Business</div>
                  <div>Monthly Revenue</div>
                  <div>Daily Avg</div>
                  <div>Profit</div>
                  <div>Margin</div>
                  <div>Trend</div>
                </div>

                {businessData.map((business, index) => (
                  <div
                    key={business.id}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr',
                      gap: '1rem',
                      padding: '1.5rem 2rem',
                      borderBottom: index < businessData.length - 1 ? '1px solid #2a2a2a' : 'none',
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '0.95rem',
                      color: '#bbb',
                      transition: 'all 0.3s ease',
                      animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`,
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <div style={{ color: '#fff', fontFamily: '"Inter", sans-serif' }}>{business.name}</div>
                    <div>{business.monthlyRevenue}</div>
                    <div>{business.dailyAvg}</div>
                    <div>{business.profit}</div>
                    <div>{business.margin}</div>
                    <div style={{ color: '#4ade80' }}>{business.trend}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'grocery' && (
            <div>
              <h2 style={{
                margin: '0 0 0.5rem 0',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: '#fff'
              }}>
                Grocery Stores
              </h2>
              <p style={{
                margin: '0 0 3rem 0',
                color: '#888',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.95rem'
              }}>
                KwikSpar Brackenfell & OK Foods Bellville performance
              </p>

              {businessData.filter(b => b.type === 'grocery').map((store, index) => (
                <div
                  key={store.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid #2a2a2a',
                    padding: '2rem',
                    borderRadius: '2px',
                    marginBottom: '2rem',
                    animation: `slideUp 0.5s ease-out ${index * 0.1}s backwards`
                  }}
                >
                  <h3 style={{
                    margin: '0 0 1.5rem 0',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: '#fff',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                    {store.name}
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}>
                        Monthly Revenue
                      </div>
                      <div style={{
                        fontSize: '1.75rem',
                        color: '#fff',
                        fontFamily: '"IBM Plex Mono", monospace'
                      }}>
                        {store.monthlyRevenue}
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}>
                        Profit
                      </div>
                      <div style={{
                        fontSize: '1.75rem',
                        color: '#4ade80',
                        fontFamily: '"IBM Plex Mono", monospace'
                      }}>
                        {store.profit}
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}>
                        Margin
                      </div>
                      <div style={{
                        fontSize: '1.75rem',
                        color: '#fff',
                        fontFamily: '"IBM Plex Mono", monospace'
                      }}>
                        {store.margin}
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}>
                        Growth
                      </div>
                      <div style={{
                        fontSize: '1.75rem',
                        color: '#4ade80',
                        fontFamily: '"IBM Plex Mono", monospace'
                      }}>
                        {store.trend}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'hospitality' && (
            <div>
              <h2 style={{
                margin: '0 0 0.5rem 0',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: '#fff'
              }}>
                Hospitality Businesses
              </h2>
              <p style={{
                margin: '0 0 3rem 0',
                color: '#888',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.95rem'
              }}>
                Three bed & breakfast establishments
              </p>

              {businessData.filter(b => b.type === 'hospitality').map((bnb, index) => (
                <div
                  key={bnb.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid #2a2a2a',
                    padding: '2rem',
                    borderRadius: '2px',
                    marginBottom: '2rem',
                    animation: `slideUp 0.5s ease-out ${index * 0.1}s backwards`
                  }}
                >
                  <h3 style={{
                    margin: '0 0 1.5rem 0',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: '#fff',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                    {bnb.name}
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}>
                        Monthly Revenue
                      </div>
                      <div style={{
                        fontSize: '1.75rem',
                        color: '#fff',
                        fontFamily: '"IBM Plex Mono", monospace'
                      }}>
                        {bnb.monthlyRevenue}
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}>
                        Profit
                      </div>
                      <div style={{
                        fontSize: '1.75rem',
                        color: '#4ade80',
                        fontFamily: '"IBM Plex Mono", monospace'
                      }}>
                        {bnb.profit}
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}>
                        Margin
                      </div>
                      <div style={{
                        fontSize: '1.75rem',
                        color: '#fff',
                        fontFamily: '"IBM Plex Mono", monospace'
                      }}>
                        {bnb.margin}
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}>
                        Growth
                      </div>
                      <div style={{
                        fontSize: '1.75rem',
                        color: '#4ade80',
                        fontFamily: '"IBM Plex Mono", monospace'
                      }}>
                        {bnb.trend}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'farmstall' && (
            <div>
              <h2 style={{
                margin: '0 0 0.5rem 0',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: '#fff'
              }}>
                Rooiberg Farm Stall
              </h2>
              <p style={{
                margin: '0 0 3rem 0',
                color: '#888',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.95rem'
              }}>
                Artisanal produce, baked goods & local crafts
              </p>

              {businessData.filter(b => b.type === 'farmstall').map((farmstall, index) => (
                <div key={farmstall.id}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid #2a2a2a',
                      padding: '2rem',
                      borderRadius: '2px'
                    }}>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.75rem'
                      }}>
                        Monthly Revenue
                      </div>
                      <div style={{
                        fontSize: '2rem',
                        color: '#fff',
                        fontFamily: '"IBM Plex Mono", monospace',
                        marginBottom: '0.5rem'
                      }}>
                        {farmstall.monthlyRevenue}
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#4ade80',
                        fontFamily: '"Inter", sans-serif'
                      }}>
                        {farmstall.trend} vs last month
                      </div>
                    </div>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid #2a2a2a',
                      padding: '2rem',
                      borderRadius: '2px'
                    }}>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#666',
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.75rem'
                      }}>
                        Profit
                      </div>
                      <div style={{
                        fontSize: '2rem',
                        color: '#4ade80',
                        fontFamily: '"IBM Plex Mono", monospace',
                        marginBottom: '0.5rem'
                      }}>
                        {farmstall.profit}
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#666',
                        fontFamily: '"Inter", sans-serif'
                      }}>
                        {farmstall.margin} margin (highest!)
                      </div>
                    </div>
                  </div>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid #2a2a2a',
                    padding: '2rem',
                    borderRadius: '2px'
                  }}>
                    <h3 style={{
                      margin: '0 0 1.5rem 0',
                      fontSize: '1.25rem',
                      fontWeight: 300,
                      color: '#fff'
                    }}>
                      Top Products
                    </h3>
                    <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.95rem', color: '#bbb' }}>
                      {[
                        { item: 'Homemade preserves & jams', sales: 'R 42,340' },
                        { item: 'Fresh baked goods', sales: 'R 38,920' },
                        { item: 'Local craft beer & wine', sales: 'R 35,670' },
                        { item: 'Artisanal cheese & biltong', sales: 'R 28,450' }
                      ].map((product, idx) => (
                        <div
                          key={idx}
                          style={{
                            padding: '1rem 0',
                            borderBottom: idx < 3 ? '1px solid #2a2a2a' : 'none',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <span>{product.item}</span>
                          <span style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#fff' }}>{product.sales}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'reports' && (
            <div>
              <h2 style={{
                margin: '0 0 0.5rem 0',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: '#fff'
              }}>
                Portfolio Reports
              </h2>
              <p style={{
                margin: '0 0 3rem 0',
                color: '#888',
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.95rem'
              }}>
                Consolidated insights across all businesses
              </p>

              <div style={{
                display: 'grid',
                gap: '1.5rem'
              }}>
                {[
                  { title: 'Monthly Performance Summary', description: 'Revenue, profit, and growth across all 6 businesses', updated: 'Updated 1 hour ago' },
                  { title: 'Comparative Analysis', description: 'Which businesses are outperforming and why', updated: 'Updated 3 hours ago' },
                  { title: 'Cash Flow Forecast', description: 'Projected income and expenses for next quarter', updated: 'Updated 1 day ago' },
                  { title: 'Tax & Compliance Report', description: 'VAT, PAYE, and regulatory requirements summary', updated: 'Updated 2 days ago' }
                ].map((report, index) => (
                  <div
                    key={report.title}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid #2a2a2a',
                      padding: '2rem',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      animation: `slideUp 0.5s ease-out ${index * 0.1}s backwards`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <h3 style={{
                      margin: '0 0 0.5rem 0',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: '#fff'
                    }}>
                      {report.title}
                    </h3>
                    <p style={{
                      margin: '0 0 0.75rem 0',
                      color: '#888',
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.95rem'
                    }}>
                      {report.description}
                    </p>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#666',
                      fontFamily: '"Inter", sans-serif',
                      letterSpacing: '0.05em'
                    }}>
                      {report.updated}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        * {
          box-sizing: border-box;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
      `}</style>
    </div>
  );
}
