'use client'

import React, { useState } from 'react'
import { Search, Filter, MapPin } from 'lucide-react'
import { mockSites } from '@/lib/data/mockSites'
import SiteCard from '@/components/sites/site-card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function SitesOverview() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showInactive, setShowInactive] = useState(false)

  // Filter sites based on search term and active status
  const filteredSites = mockSites.filter(
    (site) =>
      (showInactive || site.isActive) &&
      (site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        site.pi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        site.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        site.state.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const activeSites = mockSites.filter((site) => site.isActive).length
  const totalEnrollment = mockSites.reduce(
    (sum, site) => sum + (site.currentEnrollment || 0),
    0,
  )
  const totalTarget = mockSites.reduce(
    (sum, site) => sum + (site.enrollmentTarget || 0),
    0,
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Trial Sites</h1>
          <p className="text-fg-muted mt-1">
            Overview of all sites participating in the trial
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-muted" />
            <Input
              type="text"
              placeholder="Search sites..."
              className="pl-9 w-full md:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button
            variant={showInactive ? "default" : "outline"}
            size="sm"
            onClick={() => setShowInactive(!showInactive)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Show Inactive
          </Button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-fg-muted">Active Sites</h3>
            <p className="text-3xl font-bold mt-2">
              {activeSites} / {mockSites.length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-fg-muted">
              Total Enrollment
            </h3>
            <p className="text-3xl font-bold mt-2">
              {totalEnrollment} / {totalTarget}
            </p>
            <div className="w-full bg-muted rounded-full h-2 mt-3">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{
                  width: `${(totalEnrollment / totalTarget) * 100}%`,
                }}
              ></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-fg-muted">
              Geographic Distribution
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="h-6 w-6 text-primary" />
              <p className="text-3xl font-bold">
                {Array.from(new Set(mockSites.map((site) => site.country))).length}{' '}
                Countries
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sites grid */}
      {filteredSites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredSites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-fg-muted">No sites match your criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
