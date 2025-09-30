'use client'

import React from 'react'
import Link from 'next/link'
import { User, MapPin, Users, AlertCircle, Check, ChevronRight } from 'lucide-react'
import { Site } from '@/types/site'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface SiteCardProps {
  site: Site
}

export default function SiteCard({ site }: SiteCardProps) {
  const enrollmentPercentage = site.enrollmentTarget
    ? Math.round(((site.currentEnrollment || 0) / site.enrollmentTarget) * 100)
    : 0

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      {/* Status indicator */}
      <div className={`h-1 w-full ${site.isActive ? 'bg-primary' : 'bg-destructive'}`} />
      
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-lg">{site.name}</h3>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant={site.isActive ? "default" : "destructive"}>
                {site.isActive ? (
                  <>
                    <Check className="mr-1 h-3 w-3" /> Active
                  </>
                ) : (
                  <>
                    <AlertCircle className="mr-1 h-3 w-3" /> Inactive
                  </>
                )}
              </Badge>
              <span className="text-xs text-fg-muted">ID: {site.id}</span>
            </div>
          </div>
          {site.unreadCount > 0 && (
            <Badge className="rounded-full">{site.unreadCount}</Badge>
          )}
        </div>

        {/* Main content */}
        <div className="space-y-3">
          {/* PI info */}
          <div className="flex items-start gap-3">
            <User className="h-4 w-4 text-fg-muted mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">{site.pi}</p>
              <p className="text-xs text-fg-muted">Principal Investigator</p>
            </div>
          </div>

          {/* Coordinator info */}
          {site.coordinator && (
            <div className="flex items-start gap-3">
              <Users className="h-4 w-4 text-fg-muted mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">{site.coordinator}</p>
                <p className="text-xs text-fg-muted">Site Coordinator</p>
              </div>
            </div>
          )}

          {/* Contact info */}
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-fg-muted mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p>{site.address}</p>
              <p>
                {site.city}, {site.state} {site.zipCode}
              </p>
              <p>{site.country}</p>
            </div>
          </div>

          {/* Enrollment */}
          {site.enrollmentTarget && (
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-fg-muted">Enrollment</span>
                <span className="text-xs font-medium">
                  {site.currentEnrollment || 0} / {site.enrollmentTarget}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{
                    width: `${enrollmentPercentage}%`,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-border">
          <Link
            href={`/app/community/rooms/${site.id}`}
            className="flex items-center justify-between text-sm text-primary hover:underline"
          >
            <span>View site room</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
