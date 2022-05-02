export interface Response {
  _result: Result;
  courses: CoursesEntity[];
  course_count: number;
}
export interface Result {
  status: string;
  reason?: null;
}
export interface CoursesEntity {
  id: number;
  is_recommended: boolean;
  is_chat_room_disabled: boolean;
  is_post_student_info_visible: boolean;
  is_post_student_email_enabled: boolean;
  is_post_tutor_email_enabled: boolean;
  preference: Preference;
  enroll_begin_datetime: number;
  enroll_end_datetime?: number | null;
  release_datetime?: number | null;
  begin_datetime: number;
  end_datetime?: null;
  complete_datetime?: null;
  enrolled_role_period?: number | null;
  enroll_type: number;
  subscription_level?: number | null;
  enroll_limit_number?: null;
  price: string;
  price_usd: string;
  discounted_price: string;
  discounted_price_usd: string;
  discount_begin_datetime?: null;
  discount_end_datetime?: null;
  discount_title?: null;
  discount_rate?: null;
  auto_completion_condition?: AutoCompletionCondition | null;
  course_type: number;
  info_summary_visibility_dict: InfoSummaryVisibilityDict;
  is_exercise_deprecated: boolean;
  last_course_info_id: number;
  title: string;
  code: string;
  short_description: string;
  class_times?: null[] | null;
  class_type: number;
  taglist?: (string | null)[] | null;
  promote_video_url?: null;
  logo_file_url?: string | null;
  period: number;
  version: number;
  is_discounted: boolean;
  attendance_info: AttendanceInfo;
  last_attendance_updated_date?: null;
  is_free: boolean;
  library_access_type?: null;
  library_type?: number | null;
  is_enroll_noti_enabled: boolean;
  is_datetime_enrollable: boolean;
  agreement_info: AgreementInfo;
  status: number;
  last_review_status: number;
  course_agreed_datetime?: null;
  course_role: number;
  has_past_course_role: boolean;
  enrolled_user_count: number;
  enrolled_student_count: number;
  normal_lecture_count: number;
  test_lecture_count: number;
  normal_lecture_page_count: number;
  enrolled_role_begin_datetime?: null;
  enrolled_role_end_datetime?: null;
  lecture_page_read_info?: null;
  tags?: (TagsEntity | null)[] | null;
  tracks?: (TracksEntity | null)[] | null;
  instructors?: null[] | null;
  test_lecture?: null;
}
export interface Preference {
  boards?: boolean | null;
  manage?: boolean | null;
  configs?: boolean | null;
  members?: boolean | null;
  lectures?: boolean | null;
  requests?: boolean | null;
  sections?: boolean | null;
  tutoring?: boolean | null;
  dashboard?: boolean | null;
  libraries?: boolean | null;
  attendance?: boolean | null;
  leaderboard?: boolean | null;
  lectureroom?: boolean | null;
  attendance_admin?: boolean | null;
  section_schedule?: boolean | null;
  tab_menus_visibility?: TabMenusVisibility | null;
  helpcenter?: boolean | null;
  live_streaming?: boolean | null;
  chatting?: boolean | null;
  supplement_column_width?: number | null;
  click_to_play_supplement_gif?: boolean | null;
  render_markdown_in_quiz_options?: boolean | null;
}
export interface TabMenusVisibility {
  boards: boolean;
  manage: boolean;
  configs: boolean;
  members: boolean;
  lectures: boolean;
  sections: boolean;
  tutoring: boolean;
  dashboard: boolean;
  libraries: boolean;
  leaderboard: boolean;
  lectureroom: boolean;
  section_schedule: boolean;
  requests?: boolean | null;
}
export interface AutoCompletionCondition {
  op?: string | null;
  test_lecture_score?: number | null;
  normal_lecture_progress: number;
}
export interface InfoSummaryVisibilityDict {
  level: boolean;
  period: boolean;
  class_type: boolean;
  class_times: boolean;
  exercise_page_count: boolean;
  programming_language: boolean;
  total_video_duration: boolean;
  enrolled_student_count: boolean;
  auto_completion_condition: boolean;
  lecture_page_access_period: boolean;
}
export interface AttendanceInfo {
  is_enabled: boolean;
  active_end_date: string;
  active_begin_date: string;
  check_in_end_time: string;
  check_out_end_time: string;
  check_in_begin_time: string;
  check_out_begin_time: string;
  required_stay_seconds: number;
}
export interface AgreementInfo {
  title: string;
  is_enabled: boolean;
  description: string;
}
export interface TagsEntity {
  id: number;
  tag_type: number;
  name: string;
}
export interface TracksEntity {
  id: number;
  title: string;
}

export interface FilterConditions {
  $and?: $andEntity[] | null;
}
export interface $andEntity {
  title?: string | null;
  $or?: $orEntity[] | null;
}
export interface $orEntity {
  enroll_type: number;
  is_free: boolean;
}

export type CourseCardsProps = {
  numCourse: number;
  courses: CoursesEntity[];
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
};

export type SearchAreaProps = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  priceList: $orEntity[];
  setPriceList: React.Dispatch<React.SetStateAction<$orEntity[]>>;
  handleTitleParams: (value: string) => void;
  handlePriceParams: (value: string) => void;
  filterList: string[];
  setFilterList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const FREE = '무료';
export const PAY = '유료';
export const SUBSCRIBE = '구독';

export const priceInfo = {
  무료: { enroll_type: 0, is_free: true },
  유료: { enroll_type: 0, is_free: false },
  구독: { enroll_type: 4, is_free: false },
};

export const PRICE = 'price';
export const TITLE = 'title';
