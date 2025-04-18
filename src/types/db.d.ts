export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          created_at: string
          date: string | null
          id: number
          payment_status: string | null
          price: number | null
          professional_id: number | null
          status: string | null
          transaction_id: string | null
          user_id: number | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          id?: number
          payment_status?: string | null
          price?: number | null
          professional_id?: number | null
          status?: string | null
          transaction_id?: string | null
          user_id?: number | null
        }
        Update: {
          created_at?: string
          date?: string | null
          id?: number
          payment_status?: string | null
          price?: number | null
          professional_id?: number | null
          status?: string | null
          transaction_id?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      business_details: {
        Row: {
          created_at: string
          id: number
          listing_id: number | null
          opening_hours: string | null
          services: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          listing_id?: number | null
          opening_hours?: string | null
          services?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          listing_id?: number | null
          opening_hours?: string | null
          services?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      category: {
        Row: {
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          slug?: string | null
        }
        Relationships: []
      }
      community_details: {
        Row: {
          application_link: string | null
          community_type: string | null
          created_at: string
          description: string | null
          eligibility: string | null
          id: number
          listing_id: number | null
        }
        Insert: {
          application_link?: string | null
          community_type?: string | null
          created_at?: string
          description?: string | null
          eligibility?: string | null
          id?: number
          listing_id?: number | null
        }
        Update: {
          application_link?: string | null
          community_type?: string | null
          created_at?: string
          description?: string | null
          eligibility?: string | null
          id?: number
          listing_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "community_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      course_details: {
        Row: {
          created_at: string
          duration: string | null
          id: number
          instructor: string | null
          listing_id: number | null
          mode: string | null
          price: number | null
          syllabus: string | null
        }
        Insert: {
          created_at?: string
          duration?: string | null
          id?: number
          instructor?: string | null
          listing_id?: number | null
          mode?: string | null
          price?: number | null
          syllabus?: string | null
        }
        Update: {
          created_at?: string
          duration?: string | null
          id?: number
          instructor?: string | null
          listing_id?: number | null
          mode?: string | null
          price?: number | null
          syllabus?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "course_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      deal_details: {
        Row: {
          created_at: string
          deal_type: string | null
          discount_percentage: number | null
          id: number
          listing_id: number | null
          validity_date: string | null
        }
        Insert: {
          created_at?: string
          deal_type?: string | null
          discount_percentage?: number | null
          id?: number
          listing_id?: number | null
          validity_date?: string | null
        }
        Update: {
          created_at?: string
          deal_type?: string | null
          discount_percentage?: number | null
          id?: number
          listing_id?: number | null
          validity_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deal_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      event_details: {
        Row: {
          created_at: string
          end_date: string | null
          event_type: string | null
          id: number
          listing_id: number | null
          organizer: string | null
          start_date: string | null
          ticket_price: number | null
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          event_type?: string | null
          id?: number
          listing_id?: number | null
          organizer?: string | null
          start_date?: string | null
          ticket_price?: number | null
        }
        Update: {
          created_at?: string
          end_date?: string | null
          event_type?: string | null
          id?: number
          listing_id?: number | null
          organizer?: string | null
          start_date?: string | null
          ticket_price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "event_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      job_details: {
        Row: {
          application_link: string | null
          company_name: string | null
          created_at: string
          deadline: string | null
          employment_type: string | null
          experience_required: string | null
          id: number
          job_title: string | null
          listing_id: number | null
          qualifications: string | null
          responsibilities: string | null
          salary_range: string | null
        }
        Insert: {
          application_link?: string | null
          company_name?: string | null
          created_at?: string
          deadline?: string | null
          employment_type?: string | null
          experience_required?: string | null
          id?: number
          job_title?: string | null
          listing_id?: number | null
          qualifications?: string | null
          responsibilities?: string | null
          salary_range?: string | null
        }
        Update: {
          application_link?: string | null
          company_name?: string | null
          created_at?: string
          deadline?: string | null
          employment_type?: string | null
          experience_required?: string | null
          id?: number
          job_title?: string | null
          listing_id?: number | null
          qualifications?: string | null
          responsibilities?: string | null
          salary_range?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      listing: {
        Row: {
          category_id: number | null
          contact: string | null
          created_at: string
          description: string | null
          id: number
          name: string | null
          owner_id: number | null
          sub_category_id: number | null
          type: string | null
          verified: boolean | null
          website: string | null
        }
        Insert: {
          category_id?: number | null
          contact?: string | null
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          owner_id?: number | null
          sub_category_id?: number | null
          type?: string | null
          verified?: boolean | null
          website?: string | null
        }
        Update: {
          category_id?: number | null
          contact?: string | null
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          owner_id?: number | null
          sub_category_id?: number | null
          type?: string | null
          verified?: boolean | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "listing_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listing_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listing_sub_category_id_fkey"
            columns: ["sub_category_id"]
            isOneToOne: false
            referencedRelation: "subCategory"
            referencedColumns: ["id"]
          },
        ]
      }
      location: {
        Row: {
          address: string | null
          created_at: string
          id: number
          latitude: number | null
          longitude: number | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          id?: number
          latitude?: number | null
          longitude?: number | null
        }
        Update: {
          address?: string | null
          created_at?: string
          id?: number
          latitude?: number | null
          longitude?: number | null
        }
        Relationships: []
      }
      lost_found_details: {
        Row: {
          contact_info: string | null
          created_at: string
          id: number
          item_type: string | null
          last_seen_location: string | null
          listing_id: number | null
          lost_or_found: string | null
        }
        Insert: {
          contact_info?: string | null
          created_at?: string
          id?: number
          item_type?: string | null
          last_seen_location?: string | null
          listing_id?: number | null
          lost_or_found?: string | null
        }
        Update: {
          contact_info?: string | null
          created_at?: string
          id?: number
          item_type?: string | null
          last_seen_location?: string | null
          listing_id?: number | null
          lost_or_found?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lost_found_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      media: {
        Row: {
          id: number
          listing_id: number | null
          url: string | null
        }
        Insert: {
          id?: number
          listing_id?: number | null
          url?: string | null
        }
        Update: {
          id?: number
          listing_id?: number | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      professionals: {
        Row: {
          availability: string | null
          contact: string | null
          created_at: string
          description: string | null
          email: string | null
          experience: number | null
          id: number
          name: string | null
          profession: string | null
          profile_picture: string | null
          specialization: string | null
          user_id: number | null
          verified: boolean | null
          website: string | null
        }
        Insert: {
          availability?: string | null
          contact?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          experience?: number | null
          id?: number
          name?: string | null
          profession?: string | null
          profile_picture?: string | null
          specialization?: string | null
          user_id?: number | null
          verified?: boolean | null
          website?: string | null
        }
        Update: {
          availability?: string | null
          contact?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          experience?: number | null
          id?: number
          name?: string | null
          profession?: string | null
          profile_picture?: string | null
          specialization?: string | null
          user_id?: number | null
          verified?: boolean | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "professionals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      real_estate_details: {
        Row: {
          bathrooms: number | null
          bedrooms: number | null
          created_at: string
          furnished: boolean | null
          id: number
          listing_id: number | null
          price: number | null
          property_type: string | null
          square_feet: number | null
        }
        Insert: {
          bathrooms?: number | null
          bedrooms?: number | null
          created_at?: string
          furnished?: boolean | null
          id?: number
          listing_id?: number | null
          price?: number | null
          property_type?: string | null
          square_feet?: number | null
        }
        Update: {
          bathrooms?: number | null
          bedrooms?: number | null
          created_at?: string
          furnished?: boolean | null
          id?: number
          listing_id?: number | null
          price?: number | null
          property_type?: string | null
          square_feet?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "real_estate_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          created_at: string
          id: number
          listing_id: number | null
          rating: number | null
          review: string | null
          user_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          listing_id?: number | null
          rating?: number | null
          review?: string | null
          user_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          listing_id?: number | null
          rating?: number | null
          review?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      service_details: {
        Row: {
          created_at: string
          experience: number | null
          hourly_rate: number | null
          id: number
          listing_id: number | null
          service_type: string | null
        }
        Insert: {
          created_at?: string
          experience?: number | null
          hourly_rate?: number | null
          id?: number
          listing_id?: number | null
          service_type?: string | null
        }
        Update: {
          created_at?: string
          experience?: number | null
          hourly_rate?: number | null
          id?: number
          listing_id?: number | null
          service_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      software_details: {
        Row: {
          created_at: string
          developer: string | null
          download_link: string | null
          id: number
          listing_id: number | null
          platform: string | null
          pricing_model: string | null
        }
        Insert: {
          created_at?: string
          developer?: string | null
          download_link?: string | null
          id?: number
          listing_id?: number | null
          platform?: string | null
          pricing_model?: string | null
        }
        Update: {
          created_at?: string
          developer?: string | null
          download_link?: string | null
          id?: number
          listing_id?: number | null
          platform?: string | null
          pricing_model?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "software_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
      subCategory: {
        Row: {
          category_id: number | null
          id: number
          name: string | null
          slug: string | null
          sub_category: number | null
        }
        Insert: {
          category_id?: number | null
          id?: number
          name?: string | null
          slug?: string | null
          sub_category?: number | null
        }
        Update: {
          category_id?: number | null
          id?: number
          name?: string | null
          slug?: string | null
          sub_category?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "subCategory_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subCategory_sub_category_fkey"
            columns: ["sub_category"]
            isOneToOne: false
            referencedRelation: "subCategory"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: []
      }
      vehicle_details: {
        Row: {
          brand: string | null
          created_at: string
          fuel_type: string | null
          id: number
          listing_id: number | null
          mileage: number | null
          model: string | null
          price: number | null
          vehicle_type: string | null
          year: number | null
        }
        Insert: {
          brand?: string | null
          created_at?: string
          fuel_type?: string | null
          id?: number
          listing_id?: number | null
          mileage?: number | null
          model?: string | null
          price?: number | null
          vehicle_type?: string | null
          year?: number | null
        }
        Update: {
          brand?: string | null
          created_at?: string
          fuel_type?: string | null
          id?: number
          listing_id?: number | null
          mileage?: number | null
          model?: string | null
          price?: number | null
          vehicle_type?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_details_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listing"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
