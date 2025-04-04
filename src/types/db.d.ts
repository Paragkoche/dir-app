export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      applications: {
        Row: {
          applicant_id: number | null;
          applied_at: string | null;
          cover_letter: string | null;
          created_at: string;
          id: number;
          job_id: number | null;
          resume_url: string | null;
          status: string | null;
        };
        Insert: {
          applicant_id?: number | null;
          applied_at?: string | null;
          cover_letter?: string | null;
          created_at?: string;
          id?: number;
          job_id?: number | null;
          resume_url?: string | null;
          status?: string | null;
        };
        Update: {
          applicant_id?: number | null;
          applied_at?: string | null;
          cover_letter?: string | null;
          created_at?: string;
          id?: number;
          job_id?: number | null;
          resume_url?: string | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "applications_applicant_id_fkey";
            columns: ["applicant_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "applications_job_id_fkey";
            columns: ["job_id"];
            isOneToOne: false;
            referencedRelation: "job_details";
            referencedColumns: ["id"];
          }
        ];
      };
      bookings: {
        Row: {
          calendly_url: string | null;
          created_at: string;
          id: number;
          price: number | null;
          professional_id: number | null;
        };
        Insert: {
          calendly_url?: string | null;
          created_at?: string;
          id?: number;
          price?: number | null;
          professional_id?: number | null;
        };
        Update: {
          calendly_url?: string | null;
          created_at?: string;
          id?: number;
          price?: number | null;
          professional_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "bookings_professional_id_fkey";
            columns: ["professional_id"];
            isOneToOne: false;
            referencedRelation: "professionals";
            referencedColumns: ["id"];
          }
        ];
      };
      business_details: {
        Row: {
          created_at: string;
          id: number;
          listing_id: number | null;
          opening_hours: string | null;
          services: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          listing_id?: number | null;
          opening_hours?: string | null;
          services?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          listing_id?: number | null;
          opening_hours?: string | null;
          services?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "business_details_listing_id_fkey";
            columns: ["listing_id"];
            isOneToOne: false;
            referencedRelation: "listing";
            referencedColumns: ["id"];
          }
        ];
      };
      category: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          slug: string | null;
          subCategory: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          slug?: string | null;
          subCategory?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          slug?: string | null;
          subCategory?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "category_subCategory_fkey";
            columns: ["subCategory"];
            isOneToOne: false;
            referencedRelation: "subCategory";
            referencedColumns: ["id"];
          }
        ];
      };
      community_details: {
        Row: {
          application_link: string | null;
          community_type: string | null;
          created_at: string;
          description: string | null;
          eligibility: string | null;
          id: number;
        };
        Insert: {
          application_link?: string | null;
          community_type?: string | null;
          created_at?: string;
          description?: string | null;
          eligibility?: string | null;
          id?: number;
        };
        Update: {
          application_link?: string | null;
          community_type?: string | null;
          created_at?: string;
          description?: string | null;
          eligibility?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      course_details: {
        Row: {
          created_at: string;
          duration: string | null;
          id: number;
          instructor: string | null;
          mode: string | null;
          price: number | null;
          syllabus: string | null;
        };
        Insert: {
          created_at?: string;
          duration?: string | null;
          id?: number;
          instructor?: string | null;
          mode?: string | null;
          price?: number | null;
          syllabus?: string | null;
        };
        Update: {
          created_at?: string;
          duration?: string | null;
          id?: number;
          instructor?: string | null;
          mode?: string | null;
          price?: number | null;
          syllabus?: string | null;
        };
        Relationships: [];
      };
      deal_details: {
        Row: {
          created_at: string;
          deal_type: string | null;
          discount_percentage: number | null;
          id: number;
          listing_id: number | null;
          validity_date: string | null;
        };
        Insert: {
          created_at?: string;
          deal_type?: string | null;
          discount_percentage?: number | null;
          id?: number;
          listing_id?: number | null;
          validity_date?: string | null;
        };
        Update: {
          created_at?: string;
          deal_type?: string | null;
          discount_percentage?: number | null;
          id?: number;
          listing_id?: number | null;
          validity_date?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "deal_details_listing_id_fkey";
            columns: ["listing_id"];
            isOneToOne: false;
            referencedRelation: "listing";
            referencedColumns: ["id"];
          }
        ];
      };
      event_details: {
        Row: {
          created_at: string;
          end_date: string | null;
          event_type: string | null;
          id: number;
          listing_id: number | null;
          organizer: string | null;
          start_date: string | null;
          ticket_price: number | null;
        };
        Insert: {
          created_at?: string;
          end_date?: string | null;
          event_type?: string | null;
          id?: number;
          listing_id?: number | null;
          organizer?: string | null;
          start_date?: string | null;
          ticket_price?: number | null;
        };
        Update: {
          created_at?: string;
          end_date?: string | null;
          event_type?: string | null;
          id?: number;
          listing_id?: number | null;
          organizer?: string | null;
          start_date?: string | null;
          ticket_price?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "event_details_listing_id_fkey";
            columns: ["listing_id"];
            isOneToOne: false;
            referencedRelation: "listing";
            referencedColumns: ["id"];
          }
        ];
      };
      job_details: {
        Row: {
          application_link: string | null;
          company_name: string | null;
          created_at: string;
          deadline: string | null;
          employment_type: string | null;
          experience_required: string | null;
          id: number;
          job_title: string | null;
          qualifications: string | null;
          responsibilities: string | null;
          salary_range: string | null;
        };
        Insert: {
          application_link?: string | null;
          company_name?: string | null;
          created_at?: string;
          deadline?: string | null;
          employment_type?: string | null;
          experience_required?: string | null;
          id?: number;
          job_title?: string | null;
          qualifications?: string | null;
          responsibilities?: string | null;
          salary_range?: string | null;
        };
        Update: {
          application_link?: string | null;
          company_name?: string | null;
          created_at?: string;
          deadline?: string | null;
          employment_type?: string | null;
          experience_required?: string | null;
          id?: number;
          job_title?: string | null;
          qualifications?: string | null;
          responsibilities?: string | null;
          salary_range?: string | null;
        };
        Relationships: [];
      };
      listing: {
        Row: {
          category: number | null;
          contact: string | null;
          created_at: string;
          description: string | null;
          email: string | null;
          id: number;
          name: string | null;
          owner: string | null;
          subcategory: number | null;
          type: string | null;
          verified: boolean | null;
          website: string | null;
        };
        Insert: {
          category?: number | null;
          contact?: string | null;
          created_at?: string;
          description?: string | null;
          email?: string | null;
          id?: number;
          name?: string | null;
          owner?: string | null;
          subcategory?: number | null;
          type?: string | null;
          verified?: boolean | null;
          website?: string | null;
        };
        Update: {
          category?: number | null;
          contact?: string | null;
          created_at?: string;
          description?: string | null;
          email?: string | null;
          id?: number;
          name?: string | null;
          owner?: string | null;
          subcategory?: number | null;
          type?: string | null;
          verified?: boolean | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "listing_category_fkey";
            columns: ["category"];
            isOneToOne: false;
            referencedRelation: "category";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "listing_subcategory_fkey";
            columns: ["subcategory"];
            isOneToOne: false;
            referencedRelation: "subCategory";
            referencedColumns: ["id"];
          }
        ];
      };
      listing_plans: {
        Row: {
          boosted: boolean | null;
          created_at: string;
          expires_at: string | null;
          id: number;
          listing_id: number | null;
          plan_type: string | null;
        };
        Insert: {
          boosted?: boolean | null;
          created_at?: string;
          expires_at?: string | null;
          id?: number;
          listing_id?: number | null;
          plan_type?: string | null;
        };
        Update: {
          boosted?: boolean | null;
          created_at?: string;
          expires_at?: string | null;
          id?: number;
          listing_id?: number | null;
          plan_type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "listing_plans_listing_id_fkey";
            columns: ["listing_id"];
            isOneToOne: false;
            referencedRelation: "listing";
            referencedColumns: ["id"];
          }
        ];
      };
      location: {
        Row: {
          address: string | null;
          created_at: string;
          id: number;
          latitude: number | null;
          longitude: number | null;
        };
        Insert: {
          address?: string | null;
          created_at?: string;
          id?: number;
          latitude?: number | null;
          longitude?: number | null;
        };
        Update: {
          address?: string | null;
          created_at?: string;
          id?: number;
          latitude?: number | null;
          longitude?: number | null;
        };
        Relationships: [];
      };
      lost_found_details: {
        Row: {
          contact_info: string | null;
          created_at: string;
          id: number;
          item_type: string | null;
          last_seen_location: string | null;
          listing_id: number | null;
          lost_or_found: string | null;
        };
        Insert: {
          contact_info?: string | null;
          created_at?: string;
          id?: number;
          item_type?: string | null;
          last_seen_location?: string | null;
          listing_id?: number | null;
          lost_or_found?: string | null;
        };
        Update: {
          contact_info?: string | null;
          created_at?: string;
          id?: number;
          item_type?: string | null;
          last_seen_location?: string | null;
          listing_id?: number | null;
          lost_or_found?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "lost_found_details_listing_id_fkey";
            columns: ["listing_id"];
            isOneToOne: false;
            referencedRelation: "listing";
            referencedColumns: ["id"];
          }
        ];
      };
      media: {
        Row: {
          created_at: string;
          id: number;
          listing_id: number | null;
          post_id: number | null;
          url: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          listing_id?: number | null;
          post_id?: number | null;
          url?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          listing_id?: number | null;
          post_id?: number | null;
          url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "media_listing_id_fkey";
            columns: ["listing_id"];
            isOneToOne: false;
            referencedRelation: "listing";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "media_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "post";
            referencedColumns: ["id"];
          }
        ];
      };
      membership_plans: {
        Row: {
          access_to_preminum: boolean | null;
          created_at: string;
          duration_days: number | null;
          features: string | null;
          highlighted: boolean | null;
          id: number;
          listing_limit: number | null;
          name: string | null;
          price: number | null;
          priority_ranking: boolean | null;
        };
        Insert: {
          access_to_preminum?: boolean | null;
          created_at?: string;
          duration_days?: number | null;
          features?: string | null;
          highlighted?: boolean | null;
          id?: number;
          listing_limit?: number | null;
          name?: string | null;
          price?: number | null;
          priority_ranking?: boolean | null;
        };
        Update: {
          access_to_preminum?: boolean | null;
          created_at?: string;
          duration_days?: number | null;
          features?: string | null;
          highlighted?: boolean | null;
          id?: number;
          listing_limit?: number | null;
          name?: string | null;
          price?: number | null;
          priority_ranking?: boolean | null;
        };
        Relationships: [];
      };
      post: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          likes: number | null;
          listing_id: number | null;
          price: number | null;
          title: string | null;
          views: number | null;
          website: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: number;
          likes?: number | null;
          listing_id?: number | null;
          price?: number | null;
          title?: string | null;
          views?: number | null;
          website?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: number;
          likes?: number | null;
          listing_id?: number | null;
          price?: number | null;
          title?: string | null;
          views?: number | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "post_listing_id_fkey";
            columns: ["listing_id"];
            isOneToOne: false;
            referencedRelation: "listing";
            referencedColumns: ["id"];
          }
        ];
      };
      professionals: {
        Row: {
          availability: string | null;
          contact: string | null;
          created_at: string;
          description: string | null;
          email: string | null;
          experience: number | null;
          id: number;
          name: string | null;
          profession: string | null;
          profile_picture: string | null;
          specilalization: string | null;
          user_id: number | null;
          verified: boolean | null;
          website: string | null;
        };
        Insert: {
          availability?: string | null;
          contact?: string | null;
          created_at?: string;
          description?: string | null;
          email?: string | null;
          experience?: number | null;
          id?: number;
          name?: string | null;
          profession?: string | null;
          profile_picture?: string | null;
          specilalization?: string | null;
          user_id?: number | null;
          verified?: boolean | null;
          website?: string | null;
        };
        Update: {
          availability?: string | null;
          contact?: string | null;
          created_at?: string;
          description?: string | null;
          email?: string | null;
          experience?: number | null;
          id?: number;
          name?: string | null;
          profession?: string | null;
          profile_picture?: string | null;
          specilalization?: string | null;
          user_id?: number | null;
          verified?: boolean | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "professionals_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          }
        ];
      };
      real_estate_details: {
        Row: {
          bathrooms: number | null;
          bedrooms: number | null;
          created_at: string;
          furnished: boolean | null;
          id: number;
          listing_id: number | null;
          price: number | null;
          property_type: string | null;
          square_feet: number | null;
        };
        Insert: {
          bathrooms?: number | null;
          bedrooms?: number | null;
          created_at?: string;
          furnished?: boolean | null;
          id?: number;
          listing_id?: number | null;
          price?: number | null;
          property_type?: string | null;
          square_feet?: number | null;
        };
        Update: {
          bathrooms?: number | null;
          bedrooms?: number | null;
          created_at?: string;
          furnished?: boolean | null;
          id?: number;
          listing_id?: number | null;
          price?: number | null;
          property_type?: string | null;
          square_feet?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "real_estate_details_listing_id_fkey";
            columns: ["listing_id"];
            isOneToOne: false;
            referencedRelation: "listing";
            referencedColumns: ["id"];
          }
        ];
      };
      reviews: {
        Row: {
          created_at: string;
          id: number;
          rating: number | null;
          review: string | null;
          user_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          rating?: number | null;
          review?: string | null;
          user_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          rating?: number | null;
          review?: string | null;
          user_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "reviews_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          }
        ];
      };
      service_details: {
        Row: {
          created_at: string;
          experience: number | null;
          hourly_rate: number | null;
          id: number;
          listing_id: number | null;
          service_type: string | null;
        };
        Insert: {
          created_at?: string;
          experience?: number | null;
          hourly_rate?: number | null;
          id?: number;
          listing_id?: number | null;
          service_type?: string | null;
        };
        Update: {
          created_at?: string;
          experience?: number | null;
          hourly_rate?: number | null;
          id?: number;
          listing_id?: number | null;
          service_type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "service_details_listing_id_fkey";
            columns: ["listing_id"];
            isOneToOne: false;
            referencedRelation: "listing";
            referencedColumns: ["id"];
          }
        ];
      };
      software_details: {
        Row: {
          created_at: string;
          developer: string | null;
          download_link: string | null;
          id: number;
          listing_id: number | null;
          platform: string | null;
          pricing_model: string | null;
        };
        Insert: {
          created_at?: string;
          developer?: string | null;
          download_link?: string | null;
          id?: number;
          listing_id?: number | null;
          platform?: string | null;
          pricing_model?: string | null;
        };
        Update: {
          created_at?: string;
          developer?: string | null;
          download_link?: string | null;
          id?: number;
          listing_id?: number | null;
          platform?: string | null;
          pricing_model?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "software_details_listing_id_fkey";
            columns: ["listing_id"];
            isOneToOne: false;
            referencedRelation: "listing";
            referencedColumns: ["id"];
          }
        ];
      };
      subCategory: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          slug: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          slug?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          slug?: string | null;
        };
        Relationships: [];
      };
      user: {
        Row: {
          created_at: string;
          id: number;
          role: Database["public"]["Enums"]["User_role"] | null;
          user: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          role?: Database["public"]["Enums"]["User_role"] | null;
          user?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          role?: Database["public"]["Enums"]["User_role"] | null;
          user?: string | null;
        };
        Relationships: [];
      };
      user_memberships: {
        Row: {
          created_at: string;
          end_date: string | null;
          id: number;
          membership_id: number | null;
          start_date: string | null;
          status: string | null;
          user: number | null;
        };
        Insert: {
          created_at?: string;
          end_date?: string | null;
          id?: number;
          membership_id?: number | null;
          start_date?: string | null;
          status?: string | null;
          user?: number | null;
        };
        Update: {
          created_at?: string;
          end_date?: string | null;
          id?: number;
          membership_id?: number | null;
          start_date?: string | null;
          status?: string | null;
          user?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "user_memberships_membership_id_fkey";
            columns: ["membership_id"];
            isOneToOne: false;
            referencedRelation: "membership_plans";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "user_memberships_user_fkey";
            columns: ["user"];
            isOneToOne: false;
            referencedRelation: "user";
            referencedColumns: ["id"];
          }
        ];
      };
      vehicle_details: {
        Row: {
          brand: string | null;
          created_at: string;
          fuel_type: string | null;
          id: number;
          listing_id: number | null;
          mileage: number | null;
          model: string | null;
          price: number | null;
          vehicle_type: string | null;
          year: number | null;
        };
        Insert: {
          brand?: string | null;
          created_at?: string;
          fuel_type?: string | null;
          id?: number;
          listing_id?: number | null;
          mileage?: number | null;
          model?: string | null;
          price?: number | null;
          vehicle_type?: string | null;
          year?: number | null;
        };
        Update: {
          brand?: string | null;
          created_at?: string;
          fuel_type?: string | null;
          id?: number;
          listing_id?: number | null;
          mileage?: number | null;
          model?: string | null;
          price?: number | null;
          vehicle_type?: string | null;
          year?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "vehicle_details_listing_id_fkey";
            columns: ["listing_id"];
            isOneToOne: false;
            referencedRelation: "listing";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      User_role: "Admin" | "Profession" | "Business owner" | "User" | "Other";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
